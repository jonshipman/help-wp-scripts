import Testimonials from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("fp-section-testimonials");

if (renderTarget) {
  render(
    <React.StrictMode>
      <Testimonials />
    </React.StrictMode>,
    renderTarget
  );
}
