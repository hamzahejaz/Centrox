import React from "react";
import Menu from "../Menu/Menus";
import Dropdown from "../Dropdown/Dropdown";
import Check from "../Checkbox/Check";
import Nav from "../Nav/Nav";
import Cards from "../Cards/Card";
const Pops = (props) => {
  return (
    <>
      {props.print.map(function (ele, index) {
        if (ele.type === "Menu") {
          return <Menu {...ele} />;
        }
        if (ele.type === "Dropdown") {
          return <Dropdown {...ele} />;
        }
        if (ele.type === "Check") {
          return <Check {...ele} />;
        }
        if (ele.type === "Nav") {
          return <Nav {...ele} />;
        }
        if (ele.type === "Card") {
          return <Cards {...ele} />;
        }
        return <h1>Data Not found</h1>;
      })}
    </>
  );
};
export default Pops;
