import Label from "./Label";
import { useState } from "@wordpress/element";

export function Submenu({ items, className, style }) {
  const [hover, setHover] = useState("");
  const { origin, pathname } = window.location;
  const { large } = window.htld_navigation?.customizer_breakpoint || {};
  const isDesktop = window.matchMedia(large).matches;

  return (
    <div
      className={`absolute-l z-1 ${className || ""}`}
      onMouseLeave={() => setHover("")}
      {...{ style }}
    >
      <div className={isDesktop ? "bg-near-white" : ""}>
        {items.map((item) => {
          const {
            label,
            url,
            target,
            classes,
            object,
            object_id,
            ID,
            children,
          } = item;

          const DivProps = {
            key:object_id,
            className: "relative",
            id: `menu-item-${object || "custom"}-${object_id || ID}`,
          };

          const AnchorProps = {
            className: "no-underline db pa2 pa3-l bg-animate flex",
          };

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

          if ((origin + pathname === url || hover === ID) && isDesktop) {
            AnchorProps.className += " bg-tertiary near-white";
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
              {showChildren && (
                <Submenu
                  items={children}
                  className="top-0-l"
                  style={{ left: "100%" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
