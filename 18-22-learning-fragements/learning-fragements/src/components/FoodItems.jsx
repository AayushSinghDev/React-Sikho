import ListItem from "./ListItem";
const FoodItems = ({ foodItems, handelByButtonClicked }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            handelByButtonClicked={handelByButtonClicked}
          ></ListItem>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
