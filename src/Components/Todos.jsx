import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { getAllTodos } from "../Services/Actions/TodosAction";
import "./todo.css";

function Todos() {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todos list</h1>
      {isLoading && <h3>Loading</h3>}
      {error && <h3>Data can't fetch</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h3>{todo.id}</h3>
                <h3>{todo.title}</h3>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default Todos;
