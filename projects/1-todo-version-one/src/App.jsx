import Appname from "./Appname";
import Addtodo from "./Addtodo";
import Todoitem1 from "./Todoitem1";
import Todoitem2 from "./Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todoContener">
      <Appname></Appname>
      <div className="itemContener">
        <Addtodo></Addtodo>
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
