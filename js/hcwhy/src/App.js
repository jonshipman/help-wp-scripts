import { __ } from "@wordpress/i18n";
import { useEffect, useRef } from "@wordpress/element";
import { useLightbox } from "htld-lightbox";

const actionAbles = document.querySelectorAll(".hcwhy-btn");

export function Hcwhy() {
  const { font } = window.htld_hcwhy;
  const lightbox = useRef();
  console.log(useLightbox,"test2");
  useLightbox(lightbox, "htld-theme-hcwhy");

  useEffect(() => {
    actionAbles.forEach((e) => {
      const open_action = (evt) => {
        evt.preventDefault();

        lightbox.current.open();
      };

      e.addEventListener("click", open_action);
    });
  }, []);

  return (
    <div className="bg-white pa3 mw7 center">
      <div className="flex justify-end">
        <div
          className="pointer gray f3"
          onClick={() => lightbox.current.close()}
        >
          &times;
        </div>
      </div>
      <div className={`${font} f3 mb3 pb3 b--light-gray bb lh-title`}>{__("Hello World", "htld-theme")}</div>
    </div>
  );
}

export default Hcwhy;
