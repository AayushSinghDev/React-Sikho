import { createContext } from "react";
export const todoItemContext = createContext({
  tododata: [],
  toAddTodo: () => {},
  toDeleteTodo: () => {},
});
