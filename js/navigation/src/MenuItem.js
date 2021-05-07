import Submenu from "./Submenu";
import Label from "./Label";

export function MenuItem({ item, setHover, hover }) {
  const { label, url, target, classes, object, object_id, ID, children } = item;
  const { origin, pathname } = window.location;
  const { large } = window.htld_navigation?.customizer_breakpoint || {};
  const isDesktop = window.matchMedia(large).matches;

  const DivProps = {
    className: "relative",
    id: `menu-item-${object || "custom"}-${object_id || ID}`,
  };

  const AnchorProps = { className: "no-underline db pa2 pa3-l flex" };
  const SpanProps = { className: "", item };

  if (isDesktop) {
    AnchorProps.onMouseEnter = () => setHover(ID);
    AnchorProps.onClick = () => setHover(ID);
    AnchorProps.href = url;
    AnchorProps.target = target;
  } else {
    SpanProps.href = url;
    SpanProps.target = target;
  }

  if (origin + pathname === url || hover === ID) {
    AnchorProps.className += " primary";
  } else {
    AnchorProps.className += " color-inherit";
  }

  if (classes) {
    DivProps.className += " " + classes;
  }

  if (hover === item.id) {
    DivProps.className += " z-2";
  } else {
    DivProps.className += " z-1";
  }

  const hasChildren = ~~children?.length > 0;
  const showChildren = hasChildren && hover === ID;
  const AnchorTag = AnchorProps.href ? "a" : "span";

  return (
    <div {...DivProps}>
      <AnchorTag {...AnchorProps}>
        <Label {...{ hasChildren, setHover }} {...SpanProps}>
          {label}
        </Label>
      </AnchorTag>

      {isDesktop && (
        <div
          className={`${
            hover === ID
              ? "animate__animated animate__fadeIn b--primary"
              : "b--transparent"
          } bb bw1`}
        />
      )}
      {showChildren && (
        <Submenu items={children} style={{ minWidth: "12rem" }} />
      )}
    </div>
  );
}

export default MenuItem;
