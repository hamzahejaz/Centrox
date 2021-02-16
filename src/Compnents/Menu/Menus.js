import { Menu, Button } from "antd";
import "antd/dist/antd.css";

import { Dropdown, Space } from "antd";
import { Checkbox } from "antd";
import { Row, Col } from "antd";
const Men = (props) => {
 
  const handleClick = (e) => {
    console.log("click ", e);
  };

  const { SubMenu } = Menu;
  const menu = (
    <Menu>
      <SubMenu key="sub1" title={props.label}>
        <Checkbox.Group label="props.name" onChange={props.onChange}>
          <div style={{ padding: "10px", width: "500px" }}>
            <Row gutter={32}>
              {!props.data
                ? ""
                : props.data.map((item, key) => (
                    <Col span={8}>
                      <Checkbox key={item.value} value={item.value}>
                        {item.label} <br />
                      </Checkbox>
                    </Col>
                  ))}
            </Row>
          </div>
        </Checkbox.Group>
      </SubMenu>

      <Menu.Item key="1">For Rent</Menu.Item>
      <Menu.Item key="2">Sold</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      ></Menu>
      <Space direction="vertical">
        <Space>
          <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
            <Button style={{ marginLeft: "8px" }}>For Sale</Button>
          </Dropdown>
        </Space>
      </Space>
    </>
  );
};
export default Men;
