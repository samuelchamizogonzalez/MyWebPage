import React,{useEffect} from "react";
import "./Box.scss";

function Box(props) {
  useEffect(() => {
    document.getElementById("box").style.height = props.height+"px";
    document.getElementById("box").style.width = props.width+"px";
  }, []);

  return (
    <div id="box">
      <p>SOY UN COMPONENTE</p>
    </div>
  );
}

export default Box;
