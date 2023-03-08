import React, { useState } from "react";
import TodoCard from "../components/TodoCard";

export default function Todo() {
  // Data structure
  // State for the data
  // function for action

  // Data
  let todos = [
    {
      id: 1,
      label: "Buy Food",
      status: "DONE",
    },
    {
      id: 2,
      label: "Buy Gas and Fuel",
      status: "DONE",
    },
    {
      id: 3,
      label: "Buy Groceries",
      status: "NOT DONE",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [todoData, setTodoData] = useState(todos);
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setMsg("");

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    let newData = {
      id: todoData.length + 1,
      label: formData.todo,
      status: "NOT DONE",
    };

    let check = todoData.filter((todo) => todo.label == newData.label);
    if (check.length) {
      setMsg("Task already exist");
      return;
    }

    setTodoData([...todoData, newData]);
    setShowPopup(false);
    // console.log(formData);
    // console.log(e);
    // console.log(e.target[0].value);
  };

  const mark = (id) => {
    let todos = todoData.map((t) => ({ ...t, status: t.id == id ? "DONE" : t.status }));
    setTodoData([...todos]);
  };
  const unmark = (id) => {
    let todos = todoData.map((t) => ({ ...t, status: t.id == id ? "NOT DONE" : t.status }));
    setTodoData([...todos]);
  };

  const done = () => todoData.filter((todo) => todo.status == "NOT DONE");

  // const getNext = setTodoData.filter( nXt => {
  //     return nXt.status == "NOT DONE";
  // })
  // console.log(getNext);

  // setTodoData([...todos]);

  return (
    <>
      <section className=" bg-black">
        <div className="w-4/5 mx-auto py-8 flex text-white items-center text-xl">
          <div>
            <div>NEXT TASK</div>
            <h1 className="text-6xl text-white">{done().length ? done()[0].label : "All Task Completed"}</h1>
          </div>
          <div className="opacity-50 text-right flex-grow pt-8">{done().length ? "NOT DONE" : ""}</div>
        </div>
      </section>

      <main className="bg-gray-300 min-h-96 py-8">
        <div className="w-4/5 mx-auto">
          {/* Button */}
          <section className="text-right">
            <a onClick={() => setShowPopup(true)} className="bg-red-700 text-white py-3 px-5 rounded inline-block cursor-pointer">
              ADD TASK
            </a>
          </section>

          {/* Task Section */}
          <section>
            {todoData
              .filter((todo) => todo.status == "NOT DONE")
              .map((todo) => (
                <TodoCard key={todo.id} label={todo.label} status={todo.status} onClick={() => mark(todo.id)} />
              ))}
          </section>

          {/* Task Section */}
          <section className="my-16">
            <div>COMPLETED</div>
            {todoData
              .filter((todo) => todo.status == "DONE")
              .map((todo) => (
                <TodoCard key={todo.id} label={todo.label} status={todo.status} onClick={() => unmark(todo.id)} />
              ))}
          </section>
        </div>
      </main>

      {showPopup ? (
        <section className="bg-black bg-opacity-70 fixed h-full w-full z-100 top-0 left-0">
          <div className="relative h-full w-full">
            <div onClick={() => setShowPopup(false)} className="absolute h-full w-full " />

            <div className="absolute h-72 w-96 bg-white rounded-lg left-[50%] top-[50%] -ml-48 -mt-36">
              <form onSubmit={submitHandler} className="p-12 grid gap-6">
                {msg ? <div className="py-2 text-center bg-red-200 text-red-800 border border-red-500">{msg}</div> : <></>}
                <h3 className="text-4xl">Add Task</h3>
                <input type="text" name="todo" className="block border border-gray-300 text-2xl py-2 px-2" />
                <button className="bg-red-700 text-white py-3 px-5 rounded-lg inline-block">Add Task</button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
