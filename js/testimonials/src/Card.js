const T = window.htld_testimonials || {};

export function Card({ post }) {
  const { ID, post_title, permalink, excerpt, position } = post;

  return (
    <div className={`w-third-l w-100 pa3 testimonials-${ID}`}>
      <div className="bg-primary tc pa4 h-100 relative z-1">
        <div className="w-100">
          <div className="lh-title tc ttu fw7 f4 mb2">
            <a href={permalink} className="white no-underline">
              {post_title}
            </a>
          </div>

          <div className="lh-title tc f6">{position}</div>

          <div
            className="white lh-copy tl"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />

          <div className="o-0"><ReadMore {...{ permalink }}/></div>

          <div className="absolute bottom-0 left-0 w-100 pb4">
            <ReadMore {...{ permalink }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReadMore({ permalink }) {
  const { button_classes } = T;

  return (
    <a href={permalink} className={button_classes}>
      Read More
    </a>
  );
}

export default Card;
