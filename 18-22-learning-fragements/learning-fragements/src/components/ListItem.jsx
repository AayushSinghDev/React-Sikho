import css from "./ListItem.module.css";
const ListItem = ({ item, handelByButtonClicked }) => {
  return (
    <>
      <li className={`list-group-item ${css["kg-item"]} `}>
        <span className="kg-span">{item}</span>
        <button
          className={`btn btn-info ${css.button}`}
          onClick={() => handelByButtonClicked(item)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default ListItem;
