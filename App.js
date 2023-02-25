const heading = React.createElement(
    "h1", {
    id: "title"
} , 
"Hello world"
);
const heading2 = React.createElement(
    "h2", {
    id: "title"
} , 
"Hello world 2"
);

const conatiner = React.createElement(
    "div",
    {
        id: "conatiner",
    },
    [heading,heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(conatiner);