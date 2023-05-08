import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, StoreProvider, action } from "easy-peasy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider
      store={createStore({
        todo: [
          "Salt & Straw",
          "Screen Door",
          "Voodoo Doughnut",
          "Stretch The Noodle",
          "Tov Coffee & Tea",
        ],
        settodo: action((state, newtodo) => {
          state.todo = newtodo;
        }),
        done: [],
        setdone: action((state, newsdone) => {
          state.done = newsdone;
        }),
      })}
    >
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
