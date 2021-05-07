import { useEffect, useState } from "@wordpress/element";

export function Ensure({ children }) {
  const [pass, setPass] = useState(false);

  useEffect(() => {
    let timeout;

    function check() {
      const fields = window.htld_form_fields;

      if (fields) {
        setPass(true);
      } else {
        timeout = setTimeout(check, 100);
      }
    }

    timeout = setTimeout(check, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  console.log("checking...");

  if (!pass) {
    return null;
  }

  return children;
}
