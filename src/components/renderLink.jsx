import React from "react";
import { useState } from "react";
import Link from "./Link";

function RenderLink() {
  const [Values, setValues] = useState([
    {
      Id: "twitter",
      btn_link: "https://training.zuri.team/",
      btn_label: "Twitter Link"
    },
    {
      Id: "btn_zuri",
      btn_link: "https://training.zuri.team/",
      btn_label: "Zuri Team"
    },
    {
      Id: "books",
      btn_link: "https://books.zuri.team/",
      btn_label: "Zuri Books"
    },
    {
      Id: "book_python",
      btn_link:
        "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>",
      btn_label: "Python Books"
    },
    {
      Id: "pitch",
      btn_link: "https://background.zuri.team/",
      btn_label: "Background Check for Coders"
    },
    {
      Id: "book_design",
      btn_link: "https://books.zuri.team/design-rules",
      btn_label: "Design Books"
    }
  ]);

    return <div className="links">
        {Values.map((e, index) => (
            <Link key={index} content={e}/>
        ))}
  </div>;
}

export default RenderLink;
