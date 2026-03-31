import { Fragment } from "react/jsx-runtime";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Heading from "./components/Heading";
import Container from "./components/Container";
import Display from "./components/Display";

import { useState } from "react";

import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Green VAgitable", "Salad", "Milk", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I am Still hungry !</h3>;
  // }

  // let emptymessage =
  //   foodItems.length === 0 ? <h3>I am Still Hungry !</h3> : null;

  let textToShow = "item  enter here !";
  const [textval, settextval] = useState(textToShow);
  const [foodItem, setfooditem] = useState(foodItems);

  const handelOnkeyDown = (e) => {
    if (e.key == "Enter") {
      let newval = e.target.value;
      let newarr = [...foodItem, newval];
      setfooditem(newarr);
      e.target.value = "";
    }
  };

  // const

  return (
    <Fragment>
      <Container>
        <Heading></Heading>
        {/* {foodItems.length === 0 ? <h3>I am Still Hungry !</h3> : null} */}
        {/* {emptymessage} */}
        <Display handelOnkeyDown={handelOnkeyDown}></Display>
        <ErrorMsg foodItems={foodItem}></ErrorMsg>
        {/* <p>{textval}</p> */}
        <FoodItems foodItems={foodItem}></FoodItems>
      </Container>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos
        nisi culpa quaerat minima saepe rem consequuntur deleniti eius aliquam.
      </Container>
    </Fragment>
  );
}

export default App;
