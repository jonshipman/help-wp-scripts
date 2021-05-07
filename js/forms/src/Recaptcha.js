import { useState, useEffect } from "@wordpress/element";

const RecaptchaSiteKey = window?.__WP?.recaptcha;
const RecaptchaUrl = "https://recaptcha.net/recaptcha/api.js";

window._recaptchaLoaded = function () {
  window.recaptcha_loaded = true;
};

export function Recaptcha({ token, action = "leadform" }) {
  const [grecaptcha, setGrecaptcha] = useState(window.grecaptcha);
  const site_key = window.htld_forms?.site_key;

  useEffect(() => {
    const site_key = window.htld_forms?.site_key;

    if (site_key && !window.recaptcha_loaded) {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.defer = true;
      s.onload = () => setGrecaptcha(window.grecaptcha);
      s.src = `${RecaptchaUrl}?onload=_recaptchaLoaded&render=${site_key}`;
      document.getElementsByTagName("HEAD")[0].appendChild(s);
    }
  }, []);

  if (token && site_key && grecaptcha) {
    token.current = {
      get: function () {
        const TokenPromise = new Promise((res, rej) => {
          if (site_key && grecaptcha) {
            const r = () => {
              grecaptcha.execute(site_key, { action }).then((t) => {
                res(t);
              }, rej);
            };

            grecaptcha.ready(r);
          }
        });

        return TokenPromise;
      },
    };
  }

  return null;
}

export default Recaptcha;
