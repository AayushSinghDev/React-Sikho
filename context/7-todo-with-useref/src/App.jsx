import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import { useState, useContext } from "react";
import { todoitemcontext } from "./store/todo-item-store";

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

  const addTodoItem = (addname, adddate) => {
    settododata((currentValue) => [
      ...currentValue,
      { todoname: addname, tododate: adddate },
    ]);
  };

  const deleteTodo = (name) => {
    settododata((currentValue) =>
      currentValue.filter((item) => item.todoname !== name),
    );
  };

  return (
    <todoitemcontext.Provider
      value={{
        tododata,
        addTodoItem,
        deleteTodo,
      }}
    >
      <center className="todoContener">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <ErrorMsg></ErrorMsg>
        <Todoitems></Todoitems>
      </center>
    </todoitemcontext.Provider>
  );
}

export default App;
