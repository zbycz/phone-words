import React from "react";
import ReactDOM from "react-dom";
const App = () => {
    console.log("render");
    return (
        <div>
            <p>React herea!</p>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
