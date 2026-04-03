import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import { useContext, useReducer } from "react";
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

const todoItemReducer = (currentValue, action) => {
  let newValueItem = currentValue;
  if (action.type === "ADD_ITEM") {
    newValueItem = [
      ...currentValue,
      { todoname: action.payload.addname, tododate: action.payload.adddate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newValueItem = currentValue.filter(
      (item) => item.todoname !== action.payload.name,
    );
  }
  return newValueItem;
};

function App() {
  const [tododata, dispatchTodoItem] = useReducer(todoItemReducer, todoData);

  const additem = (addname, adddate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        addname,
        adddate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteitem = (name) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name,
      },
    };
    dispatchTodoItem(deleteItemAction);
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
