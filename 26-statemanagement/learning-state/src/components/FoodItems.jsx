import { useState } from "react";
import ListItem from "./ListItem";
const FoodItems = ({ foodItems }) => {
  const [actitem, setactitem] = useState([]);

  const handelByButtonClicked = (item) => {
    console.log(`${item} beimg Bought  !`);

    if (actitem.includes(item)) {
      let newitem = actitem.filter((fitem) => fitem !== item);
      setactitem(newitem);
    } else {
      let newitem = [...actitem, item];
      setactitem(newitem);
    }
  };

  return (
    <>
      <ul className="list-group">
        {foodItems.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            handelByButtonClicked={handelByButtonClicked}
            actitem={actitem.includes(item)}
          ></ListItem>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
