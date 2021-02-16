import React from "react";
import { Card } from "antd";
const Cards = (props) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={props.alt} src={props.src} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
      ,
    </div>
  );
};

export default Cards;
