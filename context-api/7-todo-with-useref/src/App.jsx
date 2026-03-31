import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
import { todoItemContext } from "./store/todo-item-store";
import "./App.css";
import { useState } from "react";

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
  const toAddTodo = (addname, adddate) => {
    settododata((currentValue) => [
      ...currentValue,
      { todoname: addname, tododate: adddate },
    ]);
  };

  const toDeleteTodo = (name) => {
    settododata((currentValue) =>
      currentValue.filter((item) => item.todoname !== name),
    );
  };

  return (
    <todoItemContext.Provider
      value={{
        tododata,
        toAddTodo,
        toDeleteTodo,
      }}
    >
      <center className="todoContener">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <ErrorMsg></ErrorMsg>
        <Todoitems></Todoitems>
      </center>
    </todoItemContext.Provider>
  );
}

export default App;
