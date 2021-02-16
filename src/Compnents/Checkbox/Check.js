import { Checkbox } from "antd";
const App = (props) => {
  console.log("Check props are", props);
  return (
    <>
      <Checkbox.Group label="props.name" onChange={props.onChange}>
        {props.data.map((item, key) => (
          <Checkbox key={key} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </>
  );
};

export default App;
