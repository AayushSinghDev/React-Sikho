import { useContext } from "react";
import { todoItemContext } from "../store/Store-Add-Todo";

const ErrorMsg = () => {
  const { tododata } = useContext(todoItemContext);
  return tododata.length === 0 && <h3>Enjoy Your Day !</h3>;
};

export default ErrorMsg;
