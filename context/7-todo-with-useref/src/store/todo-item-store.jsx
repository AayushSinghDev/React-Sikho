import { createContext } from "react";
export const todoitemcontext = createContext({
  tododata: [],
  addTodoItem: () => {},
  deleteTodo: () => {},
});
