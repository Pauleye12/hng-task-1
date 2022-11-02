import React from "react";

function Link(props) {
  return (
         <a
        className="link"
        href={props.content.btn_link}
        title={props.content.sub}
      >
        {props.content.btn_label}{" "}
      </a>
  );
}

export default Link;
