import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {

    if (props.hide) return null;

    console.log(props);

    let bootstrapClass = null;
    switch (props.type) {
        case 'blue': bootstrapClass = 'alert alert-primary'; break;
        case 'red': bootstrapClass = 'alert alert-danger'; break;
        case 'orange': bootstrapClass = 'alert alert-warning'; break;
        default:
            bootstrapClass = 'alert alert-info'
    }

    return(
        <div className={bootstrapClass} role="alert">
            This is a box - check it out!
        </div>
    )
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");
ReactDOM.render(jsx, element);
