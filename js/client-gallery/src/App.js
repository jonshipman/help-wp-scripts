import StackGrid from "react-stack-grid";
import { useLightbox } from "htld-lightbox";
import { useRef } from "@wordpress/element";

const root = document.getElementById("client-gallery");
const bounds = root.getBoundingClientRect();

export function ClientGallery() {
  const lightbox = useRef({});
  useLightbox(lightbox);

  const images = window.htld_client_gallery?.images || [];
  const width  = Math.floor(bounds.width / 2) - 25;

  if (images.length === 0) {
    return null;
  }

  return (
    <StackGrid columnWidth={width} monitorImagesLoaded>
      {images.map(({ ID, src, alt, full }) => (
        <div
          key={ID}
          onClick={() =>
            lightbox.current.open(
              `<div class="center"><img src="${full}" /></div>`
            )
          }
        >
          <img className="pointer" width="100%" {...{ src, alt }} />
        </div>
      ))}
    </StackGrid>
  );
}

export default ClientGallery;
