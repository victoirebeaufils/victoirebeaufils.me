import React, { useEffect, useState } from "react";
import "./button.css";
import { Link } from "gatsby";
export default function Button(props) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    console.log("props.bgcolor: " + props.bgcolor);
    setBgColor(props.bgcolor);
  }, []);
  const changeBgColor = () => {
    console.log(bgColor);
    var hsl = bgColor.substring(0, 4);
    var endhsl = bgColor.length - 1;
    var values = bgColor.substring(4, endhsl);
    var newvalues = values.split(", ");
    var h = newvalues[0];
    var s = newvalues[1];
    var l = newvalues[2];
    console.log(
      "hsl values: " + newvalues[0] + " " + newvalues[1] + newvalues[2]
    );
    var newS, newL;
    if (l < 50) {
      newS = s.split("%")[0] + 20;
      newL = l.split("%")[0] + 20;
    } else {
      newL = l.split("%")[0] - 20;
      newS = s.split("%")[0] - 20;

      var newBgColor = hsl + h + ", " + newS + ", " + newL + endhsl;
      console.log(newBgColor);
      // var newbgcolor =
    }
    newS += "%";
    newL += "%";
    console.log("new s: " + newS);
    console.log("new L: " + newL);
  };
  return (
    <button
      class="button"
      style={{
        "background-color": props.bgcolor,
        padding: "5px 15px",
        border: "none",
        "font-size": "15px",
      }}
    >
      <Link
        to={props.link}
        style={{ "text-decoration": "none", color: props.color }}
        onMouseOver={changeBgColor}
        target="_blank"
      >
        {props.children}
      </Link>
    </button>
  );
}
