import React from "react";
import { Provider } from "react-redux";
import TodoList from "./todoList";
import Store from "./store/todo/store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
