import React, { useState, useEffect } from "react";
import Props from "../Compnents/Props/Pops";
import Card from "../Compnents/Cards/Card";
import { Row, Col } from "antd";

import Axios from "axios";

const Page = () => {
  const [data, setdata] = useState("");
  var dat = JSON.parse(localStorage.getItem("data"));
  const [check, setcheck] = useState("");
  let filteredData = [];

  useEffect(() => {
    Axios.get("http://localhost:4000/User/Estate").then((res) => {
      setdata(res.data);

      localStorage.setItem(
        "data",
        JSON.stringify({
          data: res.data,
        }),
      );
      console.log(res.data);
    });
  }, []);

  console.log("data is ", data);
  const onChange = (checkedValues) => {
    setcheck(checkedValues);
    if (check != null) {
      console.log("dat  ", dat);
      console.log("check  ", checkedValues);
      let filteredData = dat.data.filter(
        (item) =>
          checkedValues.includes(item.amenities) ||
          checkedValues.includes(item.view) ||
          checkedValues.includes(item.stories) ||
          checkedValues.includes(item.price),
      );
      if (filteredData.length>0) {
        setdata(filteredData);
      } else {
         
          alert("No Result Found");
      }
      console.log("filteredData  ", filteredData);
    }
    console.log("checked = ", checkedValues);
  };

  const Main = (checkedValues) => {
    setcheck(checkedValues);
    if (check != null) {
      console.log("dat  ", dat);
      console.log("check  ", checkedValues);
      let filteredData = dat.data.filter(
        (item) =>
          checkedValues.includes(item.seller) ||
          checkedValues.includes(item.closed) ||
          checkedValues.includes(item.condition),
      );
      if (filteredData.length>0) {
        setdata(filteredData);
      } else {
         
          alert("No Result Found");
      }
      console.log("filteredData  ", filteredData);
    }
   
  };

  const [menu] = useState({
    main: [
      {
        type: "Nav",

        Header: <h2> Zillow</h2>,
        Headers: [
          {
            type: "Menu",

            color: "white",
            label: "For Sale",

            onChange: Main,
            data: [
              { value: "dealer", label: "By-Agent" },
              { value: "owner", label: "By-Owner" },
              { value: "auction", label: "Auction" },
              { value: "new", label: "New-Construction" },
              { value: "Foreclosed", label: "Foreclosed" },
              { value: "Pre-Foreclosed", label: "Pre-Foreclosed" },
            ],
          },
          {
            type: "Dropdown",
            name: "country",
            color: "white",
            label: "More",
            placeholder: "Number of Stories",
            holders: "Other-Amenities",
            holder: "View",
            onChange: onChange,
            dat: [{ value: "one", label: "Single-story Only" }],
            data: [
              { value: "A/C", label: "Must have A/C" },
              { value: "Pool", label: "Must have Pool" },
              { value: "WaterFront", label: "WaterFront" },
            ],
            sub: [
              { value: "Mountain", label: "Mountain" },
              { value: "City", label: "City" },
              { value: "Park", label: "Park" },
              { value: "Water", label: "Water" },
            ],
          },
          {
            type: "Dropdown",
            name: "country",
            color: "white",
            label: "Price",
            placeholder: "Price Range",

            onChange: onChange,

            data: [
              { value: "100K", label: "100k+" },
              { value: "200K", label: "200k+" },
              { value: "300K", label: "300k+" },
              { value: "400K", label: "400k+" },
              { value: "500K", label: "500k+" },
              { value: "600K", label: "600k+" },
              { value: "700K", label: "700k+" },
              { value: "800K", label: "800k+" },
            ],
          },
        ],
      },
    ],
  });

  return (
    <div>
      <Props print={menu.main} />
      <Row style={{ marginTop: "18px" }} gutter={32}>
        {" "}
        {data
          ? data.map((item, key) => (
              <Col span={6}>
                <Card
                  img
                  alt="example"
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  title={item.status}
                  description={item.seller}
                  top="25px"
                ></Card>
              </Col>
            ))
          : filteredData}
      </Row>
    </div>
  );
};

export default Page;
