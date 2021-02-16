import "antd/dist/antd.css";

import { Menu, Dropdown, Button, Space } from "antd";
import { Checkbox } from "antd";
import { Row, Col } from "antd";
//
const Drop = (props) => {
  const menu = (
    <Menu>
      <Row>
        <Col>
          {" "}
          <Checkbox.Group onChange={props.onChange}>
            <h4>{!props.placeholder ? "" : props.placeholder} </h4>
            {!props.dat
              ? ""
              : props.dat.map((item, key) => (
                  <Checkbox key={item.value} value={item.value}>
                    {item.label}
                  </Checkbox>
                ))}
          </Checkbox.Group>
          <br />
          <Checkbox.Group onChange={props.onChange}>
            <h4>
              {!props.holders ? "" : props.holders} <br />
            </h4>
            <div style={{ padding: "20px", width: "300px" }}>
              <Row gutter={32}>
                {!props.data
                  ? ""
                  : props.data.map((item, key) => (
                      <Col span={24}>
                        <Checkbox key={item.value} value={item.value}>
                          {item.label}
                        </Checkbox>
                      </Col>
                    ))}
              </Row>
            </div>
          </Checkbox.Group>
          <br />
          <Checkbox.Group onChange={props.onChange}>
            <h4>
              {" "}
              {!props.holder ? "" : props.holder}
              <br />
            </h4>
            <div style={{ padding: "20px", width: "300px" }}>
              <Row gutter={32}>
                {!props.sub
                  ? ""
                  : props.sub.map((item, key) => (
                      <Col span={12}>
                        <Checkbox key={item.value} value={item.value}>
                          {item.label}
                        </Checkbox>
                      </Col>
                    ))}
              </Row>
            </div>
          </Checkbox.Group>
        </Col>
      </Row>
    </Menu>
  );

  return (
    <>
      <Space direction="vertical">
        <Space>
          <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
            <Button style={{ marginLeft: "8px" }}>{props.label}</Button>
          </Dropdown>
        </Space>
      </Space>
    </>
  );
};
export default Drop;
