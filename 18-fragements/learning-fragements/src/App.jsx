import { Fragment } from "react/jsx-runtime";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Heading from "./components/Heading";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Green VAgitable", "Salad", "Milk", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I am Still hungry !</h3>;
  // }

  // let emptymessage =
  //   foodItems.length === 0 ? <h3>I am Still Hungry !</h3> : null;
  return (
    <Fragment>
      <Heading></Heading>
      {/* {foodItems.length === 0 ? <h3>I am Still Hungry !</h3> : null} */}
      {/* {emptymessage} */}
      <ErrorMsg foodItems={foodItems}></ErrorMsg>
      <FoodItems foodItems={foodItems}></FoodItems>
    </Fragment>
  );
}

export default App;
