import Staff from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("fp-section-staff");

if (renderTarget) {
  render(
    <React.StrictMode>
      <Staff />
    </React.StrictMode>,
    renderTarget
  );
}
