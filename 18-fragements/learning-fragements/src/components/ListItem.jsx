import css from "./ListItem.module.css";
const ListItem = ({ item }) => {
  return (
    <>
      <li className={`list-group-item ${css["kg-item"]} `}>
        <span className="kg-span">{item}</span>
      </li>
    </>
  );
};

export default ListItem;
