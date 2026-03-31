import Buttons from "./Buttons";
import css from "./ButtonContainer.module.css";

const ButtonContainer = ({ buttons }) => {
  return (
    <>
      <div className={css.buttonContainer}>
        {buttons.map((item, index) => (
          <Buttons item={item} key={index}></Buttons>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
