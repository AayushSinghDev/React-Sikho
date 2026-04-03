import { createContext } from "react";
import { useReducer } from "react";

export const todoItemContext = createContext([
  {
    tododata: [],
    addItem: () => {},
    deleteItem: () => {},
  },
]);

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

const handelReduceTodo = (currentState, action) => {
  let newReturnItem = currentState;
  if (action.type === "ADD_ITEM") {
    newReturnItem = [
      ...currentState,
      { todoname: action.payload.addname, tododate: action.payload.adddate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newReturnItem = currentState.filter(
      (item) => item.todoname !== action.payload.name,
    );
  }
  return newReturnItem;
};

const TodoItemContextProvider = ({ children }) => {
  const [tododata, handelDispatchTodo] = useReducer(handelReduceTodo, todoData);

  const addItem = (addname, adddate) => {
    let newObj = {
      type: "ADD_ITEM",
      payload: {
        addname,
        adddate,
      },
    };
    handelDispatchTodo(newObj);
  };
  const deleteItem = (name) => {
    let newObjdelete = {
      type: "DELETE_ITEM",
      payload: {
        name,
      },
    };
    handelDispatchTodo(newObjdelete);
  };

  return (
    <>
      <todoItemContext.Provider
        value={{
          tododata,
          addItem,
          deleteItem,
        }}
      >
        {children}
      </todoItemContext.Provider>
    </>
  );
};

export default TodoItemContextProvider;
