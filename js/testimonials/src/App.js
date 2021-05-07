import { Slide } from "react-slideshow-image";
import Card from "./Card";
import { ReactComponent as Arrow } from "./arrow.svg";
import "./style.scss";

const { useEffect, useState, useRef } = wp.element;

const T = window.htld_testimonials || {};

export function Testimonials() {
  const slideshow = useRef();
  const [slide, setSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const {
    heading,
    page_width_classes,
    font,
    case: font_case,
    customizer_breakpoint,
  } = T;
  const [isDesktop, setDesktop] = useState(customizer_breakpoint?.large);

  // Changes isDesktop on resizes based on large match media.
  useEffect(() => {
    let timeout;

    function UpdateDesktop() {
      clearTimeout(timeout);
      const { large } = T.customizer_breakpoint || {};

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

  // Chunks out the testimonials to 3 or 1 per page (depending on mobile or desktop).
  useEffect(() => {
    const { posts } = T;

    let temparray;
    const _testimonials = [];
    const chunk = isDesktop ? 3 : 1;

    for (let i = 0; i < posts.length; i += chunk) {
      temparray = posts.slice(i, i + chunk);
      _testimonials.push(temparray);
    }

    setTestimonials(_testimonials);
  }, [isDesktop]);

  const goto = (s) => {
    slideshow.current.goTo(s);
  };

  const indicator_limit = isDesktop ? 20 : 4;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={`tc mb5 f2 fw7 ${font} ${font_case}`}>{heading}</div>
      <div className={`${page_width_classes} overflow-hidden`}>
        <div class="section-posts">
          <Slide
            autoplay={false}
            arrows={false}
            ref={slideshow}
            onChange={(_, next) => {
              setSlide(next);
            }}
          >
            {testimonials.map((chunk) => (
              <div
                className="flex-l items-stretch-l"
                key={chunk.map((c) => c.ID).join(",")}
              >
                {chunk.map((post) => (
                  <Card key={`front-testimonials-${post.ID}`} {...{ post }} />
                ))}
              </div>
            ))}
          </Slide>
          <div className="flex items-center justify-center mt3">
            <div className="mr3">
              <Arrow
                className="pointer db fill-primary"
                onClick={() => slideshow.current.goBack()}
                style={{ transform: "scale(-1,1)" }}
              />
            </div>

            {testimonials.length > indicator_limit
              ? null
              : testimonials.map((_, index) => (
                  <div
                    onClick={() => goto(index)}
                    className={`pointer w1 h1 mh1 bw2 b--primary ba ${
                      slide === index ? "bg-primary" : "bg-white"
                    } br-100`}
                  />
                ))}

            <div className="ml3">
              <Arrow
                className="pointer db fill-primary"
                onClick={() => slideshow.current.goNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
