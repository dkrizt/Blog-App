/* import CounterButton from "./counterExample/CounterButton";
import CounterValue from "./counterExample/CounterValue"; */

import React from "react";
import AddNewBlog from "./blog-app/AddNewBlog";
import BlogList from "./blog-app/BlogList";

function App() {
  return (
    <>
      <div className="flex justify-center item-center bg-slate-600 h-20 w-full">
        {/* <h1 className="font-bold text-3xl text-yellow-100 pt-4">Hello World</h1> */}
      </div>
      {/* <div className="flex flex-col pt-3 ">
        <CounterValue/>
        <CounterButton/>
      </div> */}
      <div className=" flex mx-2 md:ml-20 justify-center">
        <div className="flex flex-col">
          <h1 className="pt-5 font-semibold text-3xl text-cyan-700">
            Blog App
          </h1>
          <AddNewBlog />
          <BlogList />
        </div>
      </div>
    </>
  );
}

export default App;
