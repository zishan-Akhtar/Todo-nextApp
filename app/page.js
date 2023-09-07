"use client";
import { useState } from "react";

const page = () => {
  const [title, Settitle] = useState("");
  const [decs, Setdesc] = useState("");
  const [mainTask, SetmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    SetmainTask([...mainTask, { title, decs }]);

    Settitle("");
    Setdesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i,1)
    SetmainTask(copyTask);
  };
  let renderTask = <h2>No Task Abailable</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div key={i} className="flex justify-between mb-5">
          <h5 className="text-xl">{t.title}</h5>
          <h5 className="text-lg">{t.decs}</h5>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="p-2 bg-red-500 text-white rounded ">
            DELETE
          </button>
        </div>
      );
    });
  }
  //----------//
  return (
    <>
      <h1 className="bg-black text-white font-mono font-bold text-3xl text-center">
        Zishan todo list.
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className=" border-2 m-5 px-4 py-2 "
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => {
            Settitle(e.target.value);
          }}
        />
        <input
          className="border-2 m-5 px-4 py-2"
          type="text"
          placeholder="Enter Description"
          value={decs}
          onChange={(e) => {
            Setdesc(e.target.value);
          }}
        />
        <button className="bg-black rounded font text-white px-4 py-2 ml-4">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-200 p-8 text-center">
        <ul>{renderTask}</ul>
      </div > 
    </>
  );
};

export default page;
