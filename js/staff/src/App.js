import { Slide } from "react-slideshow-image";
import { ReactComponent as Arrow } from "./arrow.svg";
import { useEffect, useState, useRef } from "@wordpress/element";
import Card from "./Card";
import "./style.scss";

const S = window.htld_staff || {};

export function Staff() {
  const slideshow = useRef();
  const [slide, setSlide] = useState(0);
  const [staff, setStaff] = useState([]);
  const {
    heading,
    page_width_classes,
    font,
    case: font_case,
    customizer_breakpoint,
  } = S;
  const [isDesktop, setDesktop] = useState(customizer_breakpoint?.large);

  // Changes isDesktop on resizes based on large match media.
  useEffect(() => {
    let timeout;

    function UpdateDesktop() {
      clearTimeout(timeout);
      const { large } = S.customizer_breakpoint || {};

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

  // Chunks out the staff to 4 or 1 per page (depending on mobile or desktop).
  useEffect(() => {
    const { posts } = S;

    let temparray;
    const _staff = [];
    const chunk = isDesktop ? 4 : 1;

    for (let i = 0; i < posts.length; i += chunk) {
      temparray = posts.slice(i, i + chunk);
      _staff.push(temparray);
    }

    setStaff(_staff);
  }, [isDesktop]);

  const goto = (s) => {
    slideshow.current.goTo(s);
  };

  const indicator_limit = isDesktop ? 20 : 4;

  if (staff.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={`tc mb5 f2 fw7 ${font} ${font_case}`}>{heading}</div>
      <div className={`${page_width_classes} overflow-hidden`}>
        <div className="section-posts">
          <Slide
            autoplay={false}
            arrows={false}
            ref={slideshow}
            onChange={(_, next) => {
              setSlide(next);
            }}
          >
            {staff.map((chunk) => (
              <div
                className="flex-l items-stretch-l justify-center-l"
                key={chunk.map((c) => c.ID).join(",")}
              >
                {chunk.map((post) => (
                  <Card key={`section-staff-${post.ID}`} {...{ post }} />
                ))}
              </div>
            ))}
          </Slide>

          <div className="flex items-center justify-center mt3">
            <div className="mr3">
              <Arrow
                className="pointer db fill-moon-gray"
                onClick={() => slideshow.current.goBack()}
                style={{ transform: "scale(-1,1)" }}
              />
            </div>

            {staff.length > indicator_limit
              ? null
              : staff.map((person, index) => (
                  <div
                    key={person.ID}
                    onClick={() => goto(index)}
                    className={`pointer w1 h1 mh1 bw2 b--moon-gray ba ${
                      slide === index ? "bg-moon-gray" : "bg-white"
                    } br-100`}
                  />
                ))}

            <div className="ml3">
              <Arrow
                className="pointer db fill-moon-gray"
                onClick={() => slideshow.current.goNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
