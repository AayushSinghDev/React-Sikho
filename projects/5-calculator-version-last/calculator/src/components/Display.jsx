import css from "./Display.module.css";
const Display = ({ totalval }) => {
  return (
    <>
      <input type="text" className={css.display} readOnly value={totalval} />
    </>
  );
};

export default Display;
