import { createContext, useState } from "react";

export const todoItemContext = createContext({
  tododata: [],
  addItemTodo: () => {},
  deleteTodo: () => {},
});

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

const TodoItemContextProvider = ({ children }) => {
  const [tododata, settododata] = useState(todoData);

  const addItemTodo = (addname, adddate) => {
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
    <>
      <todoItemContext.Provider
        value={{
          tododata,
          addItemTodo,
          deleteTodo,
        }}
      >
        {children}
      </todoItemContext.Provider>
    </>
  );
};
export default TodoItemContextProvider;
