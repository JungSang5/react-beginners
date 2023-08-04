import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const onCahnge = (event) => setTodo(event.target.value);
  console.log(toDo);
  return <div>
    <form>
      <input onChange={onCahnge} value={toDo} type="text" placeholder="Write your to do..."></input>
      <button>Add To Do</button>
    </form>
  </div>
}
export default App;