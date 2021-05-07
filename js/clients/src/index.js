import Clients from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("fp-section-clients");

if (renderTarget) {
  render(
    <React.StrictMode>
      <Clients />
    </React.StrictMode>,
    renderTarget
  );
}
