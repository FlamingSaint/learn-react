const heading = React.createElement("div",{id: "parent"},[React.createElement("h1",{id: "heading"},"Hello World from React!"),React.createElement("h2",{id: "heading"},"Hello World from React!")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);