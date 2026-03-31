import css from "./Heading.module.css";
const Heading = () => {
  return (
    <>
      <h1 className={` ${css["food-heading"]}`}>Healthy Food! </h1>
    </>
  );
};

export default Heading;
