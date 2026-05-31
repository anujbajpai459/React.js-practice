import AppName from"./component/AppName";
import AddTodo from "./component/AddTodo";
import Addmilk from "./component/Addmilk";
import Goto from "./component/goto";
import "./App.css";
function App() {
  return( <center className="todo-container"><AppName></AppName>
  <AddTodo></AddTodo>
  <div className="items-container">
  <Addmilk></Addmilk>
  <Goto></Goto> </div>
  </center>
  );
}

export default App
