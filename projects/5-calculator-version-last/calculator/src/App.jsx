import ButtonContainer from "./components/buttonContainer";
import Display from "./components/Display";
import "./App.css";

import { useState } from "react";

function App() {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [totalval, settotalval] = useState("");
  const handelOnClick = (e) => {
    // console.log(e);
    let val = e;
    if (val === "=") {
      let total = eval(totalval);
      settotalval(total);
    } else if (val === "C") {
      settotalval("");
    } else {
      let newarr = totalval + val;
      settotalval(newarr);
    }
  };
  return (
    <>
      <div className="contain">
        <Display totalval={totalval}></Display>
        <ButtonContainer
          buttons={buttons}
          handelOnClick={handelOnClick}
        ></ButtonContainer>
      </div>
      ;
    </>
  );
}

export default App;
