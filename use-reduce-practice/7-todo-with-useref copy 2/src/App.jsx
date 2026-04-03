import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import TodoItemContextProvider from "./store/Store-Add-Todo";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todoContener">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <ErrorMsg></ErrorMsg>
        <Todoitems></Todoitems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
