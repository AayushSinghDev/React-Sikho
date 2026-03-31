import ListItem from "./ListItem";
const FoodItems = ({ foodItems }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
