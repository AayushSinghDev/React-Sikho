import css from "./Container.module.css";
const Container = (props) => {
  return <div className={css.comtainer}>{props.children}</div>;
};
export default Container;
