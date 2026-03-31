import { Fragment } from "react/jsx-runtime";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Heading from "./components/Heading";
import Container from "./components/Container";
import Display from "./components/Display";

import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Green VAgitable", "Salad", "Milk", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I am Still hungry !</h3>;
  // }

  // let emptymessage =
  //   foodItems.length === 0 ? <h3>I am Still Hungry !</h3> : null;

  let textToShow = "item  enter here !";

  const handelOnChangeButton = (e) => {
    console.log(e.target.value);
    let textToShow = e.target.value;
  };

  const handelByButtonClicked = (item) => {
    console.log(`${item} beimg Bought  !`);
  };

  return (
    <Fragment>
      <Container>
        <Heading></Heading>
        {/* {foodItems.length === 0 ? <h3>I am Still Hungry !</h3> : null} */}
        {/* {emptymessage} */}
        <ErrorMsg foodItems={foodItems}></ErrorMsg>
        <Display handelOnChangeButton={handelOnChangeButton}></Display>
        <p>{textToShow}</p>
        <FoodItems
          foodItems={foodItems}
          handelByButtonClicked={handelByButtonClicked}
        ></FoodItems>
      </Container>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos
        nisi culpa quaerat minima saepe rem consequuntur deleniti eius aliquam.
      </Container>
    </Fragment>
  );
}

export default App;
