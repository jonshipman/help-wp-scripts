import { ReactComponent as Carat } from "./carat.svg";

export function Label({ children, hasChildren, setHover, item, ...props }) {
  const { ID, image_alt, image_src } = item;
  const { large } = window.htld_navigation?.customizer_breakpoint || {};
  const font_case = window.htld_navigation?.case || "";
  const isDesktop = window.matchMedia(large).matches;

  const LabelTag = props.href ? "a" : "span";

  if (typeof props.className === "string") {
    props.className += " db color-inherit no-underline";

    if (font_case !== "") {
      props.className += ` ${font_case}-l`;
    }
  }

  return (
    <>
      <LabelTag {...props}>
        {image_src ? <img src={image_src} alt={image_alt} /> : children}
      </LabelTag>
      {hasChildren && !isDesktop ? (
        <span
          className="ml-auto db dn-l pointer ph1"
          onClick={() => setHover(ID)}
        >
          <Carat />
        </span>
      ) : null}
    </>
  );
}

export default Label;
