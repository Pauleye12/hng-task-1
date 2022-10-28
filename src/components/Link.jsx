import React from "react";

function Link(props) {
  return (
    <div className="link">
      <a href={props.content.btn_link}>{props.content.btn_label}</a>
    </div>
  );
}

export default Link;
