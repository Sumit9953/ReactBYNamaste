import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="title">Food Villa</h1>
)

const HeaderComponent = () => {
    return (
        <div>
            <Title />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);