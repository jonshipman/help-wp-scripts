export function useLightbox(light, containerId = "htld-theme-js-lightbox") {
  if (!light) {
    return;
  }

  light.current = {};

  const lightboxContainer = document.getElementById(containerId);

  const lightbox = lightboxContainer.closest(".htld-lightbox");
  const content = lightboxContainer.closest(".htld-lightbox-content");
  const close = lightbox.querySelector(".htld-lightbox-close");

  light.current.open = (c) => {
    lightbox.classList.add("db");
    lightbox.classList.remove("dn");

    light.current.lastScroll = window.scrollY;

    content.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    if (c) {
      light.current.usesContent = true;
      content.innerHTML = c;
    } else {
      light.current.usesContent = false;
    }
  };

  const close_action = () => {
    lightbox.classList.remove("db");
    lightbox.classList.add("dn");

    if (!isNaN(light.current.lastScroll)) {
      window.scrollTo({
        top: light.current.lastScroll,
        left: 0,
        behavior: "smooth",
      });

      light.current.lastScroll = null;
    }

    if (light.current.usesContent) {
      content.innerHTML = "";
    }
  };

  light.current.close = close_action;

  close.addEventListener("click", close_action);
}
