import { forwardRef } from "@wordpress/element";

export const Input = forwardRef(function (
  { type, className: classNameProp, ...props },
  ref
) {
  const className = `db w-100 f5 lh-solid ba pa2 border-box bg-transparent b--moon-gray br0 ${
    classNameProp || ""
  }`;

  const ComponentProps = { ref, className, ...props };

  switch (type) {
    case "select":
      return <select {...ComponentProps} />;
    case "textarea":
      return <textarea rows={5} {...ComponentProps} />;
    default:
  }

  ComponentProps.type = type;

  return <input {...ComponentProps} />;
});

export default Input;
