import Card from "./Card";
import { useState } from "@wordpress/element";

export function Clients() {
  const [hover, setHover] = useState("");
  const { posts, heading, page_width_classes, font, case: font_case } =
    window.htld_clients || {};

  return (
    <div
      className={`${page_width_classes} overflow-hidden`}
      onMouseLeave={() => setHover("")}
    >
      <div className={`tc mb5 f2 fw7 ${font} ${font_case}`}>{heading}</div>

      <div className="section-posts flex-l items-center-l flex-wrap-l justify-center-l nt3 nl3 nr3">
        {posts.map((post) => (
          <Card
            key={`front-clients-${post.ID}`}
            {...{ post, hover, setHover }}
          />
        ))}
      </div>
    </div>
  );
}

export default Clients;
