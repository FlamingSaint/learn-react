import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=> {
  return <h1>Title</h1>
}
function Body(){
  return (
    <div>
       <Title/>
       <h2></h2>
       <h1>Body stuff</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);