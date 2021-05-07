import ClientGallery from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("client-gallery");

if (renderTarget) {
  render(
    <React.StrictMode>
      <ClientGallery />
    </React.StrictMode>,
    renderTarget
  );
}
