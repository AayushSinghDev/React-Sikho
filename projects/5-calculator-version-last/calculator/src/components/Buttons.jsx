import css from "./Buttons.module.css";
const Buttons = ({ item, handelOnClick }) => {
  return (
    <>
      <button
        className={`btn btn-secondary ${css["custom-button"]}`}
        onClick={() => handelOnClick(item)}
        // value={item}
      >
        {item}
      </button>
    </>
  );
};

export default Buttons;
