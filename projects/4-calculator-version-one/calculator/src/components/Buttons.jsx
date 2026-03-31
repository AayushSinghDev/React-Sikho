import css from "./Buttons.module.css";
const Buttons = ({ item }) => {
  return (
    <>
      <button className={`btn btn-secondary ${css["custom-button"]}`}>
        {item}
      </button>
    </>
  );
};

export default Buttons;
