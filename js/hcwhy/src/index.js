import Hcwhy from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("htld-theme-hcwhy");

if (renderTarget) {
  render(
    <React.StrictMode>
      <Hcwhy />
    </React.StrictMode>,
    renderTarget
  );
}
