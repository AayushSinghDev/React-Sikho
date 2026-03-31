import css from "./Display.module.css";
const Display = () => {
  return (
    <>
      <input type="text" className={css.display} readOnly />
    </>
  );
};

export default Display;
