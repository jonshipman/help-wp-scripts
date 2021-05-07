import Form from "./App";
import { Ensure } from "./Ensure";
import { render } from "@wordpress/element";

const renderTarget = document.querySelectorAll(".htld-form");

if (~~renderTarget?.length > 0) {
  renderTarget.forEach((e) => {
    render(
      <React.StrictMode>
        <Ensure>
          <Form id={e.id} />
        </Ensure>
      </React.StrictMode>,
      e
    );
  });
}
