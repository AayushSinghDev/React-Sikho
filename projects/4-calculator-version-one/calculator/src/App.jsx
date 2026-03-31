import ButtonContainer from "./components/buttonContainer";
import Display from "./components/Display";
import "./App.css";

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
  return (
    <>
      <div className="contain">
        <Display></Display>
        <ButtonContainer buttons={buttons}></ButtonContainer>
      </div>
      ;
    </>
  );
}

export default App;
