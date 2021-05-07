import { ReactComponent as Arrow } from "./arrow.svg";

export function Card({ post, hover, setHover }) {
  const { ID, image: src, alt, post_title, permalink } = post;

  let className = "aspect-ratio aspect-ratio--1x1 bg-light-gray shadow-animate";
  let titleClassName =
    "f5 absolute z-2 bottom-0 left-0 w-100 pa4 bg-animate flex justify-between items-center";

  if (hover === ID) {
    className += " shadow-4";
    titleClassName += " bg-primary white hover-active";
  } else {
    titleClassName += " bg-light-gray";
  }

  return (
    <div
      className={`w-third-l w-100 pa3 clients-${ID}`}
      onMouseEnter={() => setHover(ID)}
    >
      <div {...{ className }}>
        <a
          href={permalink}
          className="aspect-ratio--object no-underline color-inherit z-3"
        />
        {src && (
          <img
            {...{ src, alt }}
            className="db object-cover aspect-ratio--object z-1"
          />
        )}
        <div className={titleClassName}>
          <span>{post_title}</span>
          <span>
            <Arrow className="clients-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
