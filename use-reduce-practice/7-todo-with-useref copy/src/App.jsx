import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import { useReducer } from "react";

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

const reducerTodoItem = (currentValue, action) => {
  let newReturnval = currentValue;
  if (action.type === "ADD_ITEM") {
    newReturnval = [
      ...currentValue,
      { todoname: action.payload.addname, tododate: action.payload.adddate },
    ];
  } else if (action.type === "DELETE_TODO") {
    newReturnval = currentValue.filter(
      (item) => item.todoname !== action.payload.name,
    );
  }
  return newReturnval;
};

function App() {
  // const [tododata, settododata] = useState(todoData);
  const [tododata, DispatchTodoItem] = useReducer(reducerTodoItem, todoData);

  function handelvalueadded(addname, adddate) {
    const newaddObj = {
      type: "ADD_ITEM",
      payload: {
        addname,
        adddate,
      },
    };
    DispatchTodoItem(newaddObj);
  }

  const handelOnDelete = (name) => {
    const deleteTodo = {
      type: "DELETE_TODO",
      payload: {
        name,
      },
    };

    DispatchTodoItem(deleteTodo);
  };

  return (
    <center className="todoContener">
      <Appname></Appname>
      <Addtodo handelvalueadded={handelvalueadded}></Addtodo>
      {tododata.length === 0 && <ErrorMsg></ErrorMsg>}
      <Todoitems
        todoData={tododata}
        handelOnDelete={handelOnDelete}
      ></Todoitems>
    </center>
  );
}

export default App;
