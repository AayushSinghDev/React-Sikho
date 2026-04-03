import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import { useContext, useState } from "react";
import { todoContext } from "./store/todo-context-api";

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
  const [tododata, settododata] = useState(todoData);

  const additem = (addname, adddate) => {
    settododata((currentValue) => [
      ...currentValue,
      { todoname: addname, tododate: adddate },
    ]);
  };

  const deleteitem = (name) => {
    settododata((currentValue) =>
      tododata.filter((item) => item.todoname !== name),
    );
  };

  return (
    <todoContext.Provider
      value={{
        tododata,
        additem,
        deleteitem,
      }}
    >
      <center className="todoContener">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <ErrorMsg></ErrorMsg>
        <Todoitems></Todoitems>
      </center>
    </todoContext.Provider>
  );
}

export default App;
