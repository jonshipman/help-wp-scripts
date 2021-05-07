const S = window.htld_staff || {};

export function Card({ post }) {
  const { ID, post_title, title, thumbnail, since } = post;
  const { font, case: font_case } = S;

  return (
    <div className={`w-25-l w-100 ph3 flex-none lh-solid staff-${ID}`}>
      <div className="w-100">
        <div className="bg-white ph4 relative z-1">
          <img src={thumbnail} alt={post_title} height="324" className="db relative z-2 center" />

          <div className="bg-moon-gray h4 absolute bottom-0 left-0 w-100 z-1" />
        </div>
        <div className="pa4 bg-moon-gray">
          <div className={`${font} tc f4 mb2`}>{post_title}</div>

          <div className={`tc f6 mt2 fw7 ${font_case}`}>{title}</div>
          {since && (
            <div className={`tc f6 white mt2 fw7 ${font_case}`}>
              Since {since}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
