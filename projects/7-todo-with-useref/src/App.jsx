import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
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
  // const handelvalueadded = (addname, adddate) => {
  //   settododata((currentValue) => {
  //     let newarr = [
  //       ...currentValue,
  //       {
  //         todoname: addname,
  //         tododate: adddate,
  //       },
  //     ];
  //     return newarr;
  //   });
  // };

  const handelvalueadded = (addname, adddate) => {
    settododata((currentValue) => [
      ...currentValue,
      { todoname: addname, tododate: adddate },
    ]);
  };

  const handelOnDelete = (name) => {
    settododata((currentValue) =>
      tododata.filter((item) => item.todoname !== name),
    );
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
