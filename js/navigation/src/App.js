import MenuItem from "./MenuItem";
import { ReactComponent as Bars } from "./bars.svg";
import { useState, useEffect } from "@wordpress/element";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState("");
  const { nav_items, is_admin_bar_showing, customizer_breakpoint } =
    window.htld_navigation || {};
  const [isDesktop, setDesktop] = useState(customizer_breakpoint?.large);

  useEffect(() => {
    let timeout;

    function UpdateDesktop() {
      clearTimeout(timeout);
      const { large } = window.htld_navigation?.customizer_breakpoint || {};

      timeout = setTimeout(() => {
        setDesktop(window.matchMedia(large).matches);
      }, 80);
    }

    window.addEventListener("resize", UpdateDesktop);
    UpdateDesktop();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", UpdateDesktop);
    };
  }, []);

  const DivToggleProps = { className: "z-2", style: {} };
  const DivNavItemsWrap = {
    style: {},
    className: "flex-l items-center-l",
    onMouseLeave: () => setHover(""),
  };

  if (open) {
    DivToggleProps.className += " db";
  } else {
    DivToggleProps.className += " dn db-l";
  }

  if (!isDesktop) {
    DivToggleProps.className +=
      " bg-white-30 absolute absolute--fill z-2 pointer";

    if (is_admin_bar_showing) {
      DivToggleProps.style.top = "46px";
    }

    DivNavItemsWrap.className += " bg-tertiary white pa3 min-h-100";
    DivNavItemsWrap.style.width = "50vw";
    DivNavItemsWrap.style.cursor = "default";

    if (open) {
      DivNavItemsWrap.className += " animate__animated animate__slideInLeft";
    }

    DivToggleProps.onClick = () => {
      setOpen(false);
    };

    DivNavItemsWrap.onClick = (event) => {
      event.stopPropagation();
    };
  } else {
    DivToggleProps.className += " relative";
  }

  return (
    <>
      <div className="pointer db dn-l" onClick={() => setOpen(!open)}>
        <Bars />
      </div>
      <div {...DivToggleProps}>
        <div {...DivNavItemsWrap}>
          {nav_items.map((item) => (
            <MenuItem {...{ item, hover, setHover }} key={item.ID} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Navigation;
