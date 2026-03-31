import css from "./Display.module.css";
const Display = ({ handelOnkeyDown }) => {
  return (
    <>
      <input type="text" className={css.Display} onKeyDown={handelOnkeyDown} />
    </>
  );
};

export default Display;
