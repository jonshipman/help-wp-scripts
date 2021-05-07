import Hero from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("hero");

if (renderTarget) {
  render(
    <React.StrictMode>
      <Hero />
    </React.StrictMode>,
    renderTarget
  );
}
