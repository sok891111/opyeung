import React from "react";

import "./Opbutton.css";

export default function Opbutton(props) { 
  const {primary,label} = props
  if (primary) {
    return <div className="button primary-button hoverable">{label}</div>;
  } else {
    return <div className="button secondary-button hoverable">{label}</div>;
  }
}