import { useRef, useState, useEffect } from "@wordpress/element";

export function useForm(props) {
  const { id, form, formError, onCompleted, onError, onFailed } = props || {};
  const { endpoint, nonce } = window.htld_forms || {};

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const fields = useRef({});
  const token = useRef();
  const [loading, setLoading] = useState(false);

  // Process any user scripts.
  useEffect(() => {
    const on_success = window.htld_form_fields?.[id]?.on_success;

    if (on_success && success !== false) {
      on_success();
    }
  }, [success]);

  const rest = async ({ input }) => {
    setLoading(true);

    try {
      const res = await fetch(`${endpoint}htld/v1/form-post`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": nonce,
        },
      });

      const body = await res.json();

      if (body.success) {
        setSuccess("Thank you for your submission.");
        setError(false);
      } else {
        setSuccess(false);
        setError(body?.message || "There was an error during submission.");
      }

      if (onCompleted) {
        onCompleted(body);
      }
    } catch (e) {
      setSuccess(false);
      setError(e?.message || "There was an error during submission.");

      if (onError) {
        onError(e);
      }
    }

    setLoading(false);
  };

  const onClick = () => {
    let pass = true;
    Object.values(fields.current).forEach((field) => {
      if (field.error) {
        field.setError(true);
        pass = false;
      }
    });

    if (formError) {
      pass = false;
    }

    if (pass) {
      setError(null);

      const input = { form_id: id };

      Object.values(fields.current).forEach((field) => {
        input[field.id] = field.value;
      });

      if (form) {
        Object.entries(form).forEach(([k, v]) => {
          input[k] = v;
        });
      }

      if (token.current?.get) {
        token.current
          .get()
          .then((g_token) => {
            rest({ input: { ...input, g_token } });
          })
          .catch((e) => {
            console.error(e);

            setError("Please refresh the page and try again.");
            if (onError) {
              onError({ pass: false, recaptcha: false });
            }
          });
      } else {
        rest({ input });
      }
    } else {
      setSuccess(false);
      setError(formError || "Please check the required fields.");

      if (onFailed) {
        onFailed();
      }
    }
  };

  return {
    fields,
    token,
    loading,
    error,
    success,
    onClick,
  };
}

export default useForm;
