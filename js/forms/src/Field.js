import { cloneElement } from "@wordpress/element";

export function Field({ weight, children, label, id, required }) {
  const childrenWithId = children
    ? cloneElement(children, { id, required })
    : null;

  let className = "ph2 ";

  switch (weight) {
    case 2:
      className += "w-50-l";
      break;
    case 3:
      className += "w-third-l";
      break;
    case 4:
      className += "w-25-l";
      break;
    case 5:
      className += "w-20-l";
      break;
    default:
      className += "w-100";
  }

  return (
    <div {...{ className }}>
      {label && (
        <label htmlFor={id} className="f5 mb1">
          {label}: {required && <span className="red">*</span>}
        </label>
      )}
      <div>{childrenWithId}</div>
    </div>
  );
}

export default Field;
