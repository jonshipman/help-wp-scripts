import { Control } from "./fields";
import { useMemo } from "@wordpress/element";
import Field from "./Field";
import Recaptcha from "./Recaptcha";
import Row from "./Row";
import useForm from "./useForm";
import Valid from "./Valid";

export function Form({ id }) {
  const F = window.htld_forms || {};
  const form_fields = window.htld_form_fields?.[id]?.fields;
  const { fields, token, onClick, error, success, loading } = useForm({ id });

  const rows = useMemo(() => {
    const ff = window.htld_form_fields?.[id]?.fields;

    if (ff) {
      return _make_rows(ff);
    }

    return [];
  }, [id]);

  const wait_recaptcha = form_fields.map((i) => i.recaptcha).includes(true);

  if (!form_fields) {
    return null;
  }

  return (
    <div>
      <div>
        {error && <div className="bg-near-white f4 red pa3 mb3">{error}</div>}
        {success && (
          <div className="bg-near-white f4 green pa3 mb3">{success}</div>
        )}
      </div>
      <div>
        {rows.map((row) => {
          return (
            <Row key={"row" + row.map((f) => f.id).join("-")}>
              {row.map((field) => {
                const {
                  label,
                  id,
                  weight,
                  required,
                  type,
                  options,
                  default: value,
                  valid,
                  error_msg: errorMessage,
                  recaptcha,
                } = field;

                let ValidFn;

                switch (valid) {
                  case "Email":
                    ValidFn = Valid.Email;
                    break;
                  case "Phone":
                    ValidFn = Valid.Phone;
                    break;
                  default:
                    ValidFn = Valid.NotEmptyString;
                }

                return (
                  <Field key={id} {...{ label, id, weight, required }}>
                    <Control
                      ref={fields}
                      valid={required ? ValidFn : null}
                      {...{ errorMessage, type, options, value }}
                    >
                      {recaptcha && <Recaptcha {...{ token }} />}
                    </Control>
                  </Field>
                );
              })}
            </Row>
          );
        })}
        <div className="mt3 white">
          <div className={F.button_classes} disabled={loading} {...{ onClick }}>
            Submit
          </div>
        </div>
      </div>

      {!wait_recaptcha && <Recaptcha {...{ token }} />}
    </div>
  );
}

function _make_rows(form_fields) {
  const rows = [];
  let _t = [];

  form_fields.forEach((field) => {
    if (field.weight === 1) {
      if (_t.length > 0) {
        rows.push(_t);
        _t = [];
      }

      rows.push([field]);
    } else {
      _t.push(field);
    }
  });

  if (_t.length > 0) {
    rows.push(_t);
    _t = [];
  }

  return rows;
}

export default Form;
