import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="nav_logo"
      src="https://scontent.fdel10-1.fna.fbcdn.net/v/t39.30808-6/300176743_438975634916329_7846122112249297241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jybOTNIOJb4AX94zkN2&_nc_ht=scontent.fdel10-1.fna&oh=00_AfASofyYj6otle4hN8J_-aOH5eZH5Dw1JyUOYwIL0593PA&oe=64263078"
      alt=""
    />
  </a>
);

const Data = [{
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
]

const ResturantCard = ({name , image ,cusines,rating}) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>{cusines.join(",")}</h3>
            <h4>{rating} star</h4>
        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
        <ResturantCard name = {Data.name} image = {Data.image} cusines={Data.cusines} rating={Data.rating} />
    </div>
  )
};
const Footer = () => {
  return <h1>Footer</h1>;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
