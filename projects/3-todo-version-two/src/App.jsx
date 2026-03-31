import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import "./App.css";

const todoData = [
  {
    todoname: "Go to Collage",
    tododate: "23/04/2023",
  },
  {
    todoname: "Go to gym",
    tododate: "23/04/2023",
  },
  {
    todoname: "Like this Video",
    tododate: "23/04/2023",
  },
  {
    todoname: "Love You Shivani",
    tododate: "23/04/2023",
  },
];

function App() {
  return (
    <center className="todoContener">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Todoitems todoData={todoData}></Todoitems>
    </center>
  );
}

export default App;
