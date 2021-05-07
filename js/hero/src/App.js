import { Fade } from "react-slideshow-image";
import Image from "./Image";

export function Hero() {
  const {
    images,
    page_width_classes,
    heading,
    subheading,
    font,
    case: font_case,
    button_text,
    button_link,
    button_classes,
  } = window.htld_hero;

  return (
    <div className="relative z-1">
      <div
        className={`${page_width_classes} tc relative z-3 pv6 white text-shadow-1 lh-solid`}
      >
        <div className={`${font} ${font_case} f-subheadline-l f1 mb4`}>{heading}</div>
        {subheading && (
          <div className={`${font} ${font_case} f2-l f3 fw7 mb4 tracked`}>{subheading}</div>
        )}
        {button_text && (
          <div>
            <a className={button_classes} href={button_link || "#"}>
              {button_text}
            </a>
          </div>
        )}
      </div>
      <div className="absolute absolute--fill z-1 overflow-hidden">
        {~~images?.length === 1 ? (
          <Image src={images[0].src} alt={images[0].alt} />
        ) : (
          <Fade
            arrows={false}
            indicators={false}
            pauseOnHover={false}
          >
            {images.map(({ src, alt, ID }) => (
              <Image key={`hero-slider-${ID}`} {...{ src, alt }} />
            ))}
          </Fade>
        )}
      </div>
      <div className="absolute absolute--fill z-2 bg-black-40" />
    </div>
  );
}

export default Hero;
