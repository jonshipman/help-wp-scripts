import Navigation from "./App";
import { render } from "@wordpress/element";

const renderTarget = document.getElementById("header-navigation-links");

if (renderTarget) {
  render(
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>,
    renderTarget
  );
}
