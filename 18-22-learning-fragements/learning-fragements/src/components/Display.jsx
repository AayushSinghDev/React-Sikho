import css from "./Display.module.css";
const Display = ({ handelOnChangeButton }) => {
  return (
    <>
      <input
        type="text"
        className={css.Display}
        onChange={handelOnChangeButton}
      />
    </>
  );
};

export default Display;
