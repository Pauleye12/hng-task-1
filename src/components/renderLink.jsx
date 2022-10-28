import React from "react";
import { useState } from "react";
import Link from "./Link";

function RenderLink() {
  const [Values, setValues] = useState([
    {
      Id: "twitter",
      btn_link: "https://twitter.com/pauleye12_/",
      btn_label: "Twitter Link",
      sub: ''
    },
    {
      Id: "btn_zuri",
      btn_link: "https://training.zuri.team/",
      btn_label: "Zuri Team",
      sub: ''
    },
    {
      Id: "books",
      btn_link: "https://books.zuri.team/",
      btn_label: "Zuri Books",
      sub: "this is where you find books about design and coding",
    },
    {
      Id: "book_python",
      btn_link:
        "https://books.zuri.team/python-for-beginners?ref_id=<adeleye oreoluwa>",
      btn_label: "Python Books",
      sub: "ome and get your books at affordable prices",
    },
    {
      Id: "pitch",
      btn_link: "https://background.zuri.team/",
      btn_label: "Background Check for Coders",
      sub: "I do good background check on coders to offer their services to you",
    },
    {
      Id: "book_design",
      btn_link: "https://books.zuri.team/design-rules",
      btn_label: "Design Books",
      sub: "zuri offers free design book for all aspiring ui/ux designers",
    },
  ]);

    return <div className="links">
        {Values.map((e, index) => (
            <Link key={index} content={e}/>
        ))}
  </div>;
}

export default RenderLink;
