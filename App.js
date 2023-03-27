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
    id: 1,
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 2,
    name: "Bittoo Samosay Wala",
    image: "https://b.zmtcdn.com/data/dish_photos/458/5b008f130ff38b41c1f87d363260b458.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 3,
    name: "Sethi's The Cake Shop",
    image: "https://b.zmtcdn.com/data/pictures/2/302972/8d62178fa3729861e982606cf7a80f13_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 4,
    name: "Flavor of Punjabi",
    image: "https://b.zmtcdn.com/data/pictures/1/307511/2c93135b7d1095a7b6931bc9fb8ad13a_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 5,
    name: "McDonald's",
    image: "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 6,
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 7,
    name: "Bittoo Samosay Wala",
    image: "https://b.zmtcdn.com/data/dish_photos/458/5b008f130ff38b41c1f87d363260b458.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 8,
    name: "Sethi's The Cake Shop",
    image: "https://b.zmtcdn.com/data/pictures/2/302972/8d62178fa3729861e982606cf7a80f13_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 9,
    name: "Flavor of Punjabi",
    image: "https://b.zmtcdn.com/data/pictures/1/307511/2c93135b7d1095a7b6931bc9fb8ad13a_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 10,
    name: "McDonald's",
    image: "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 11,
    name: "La Pino'z Pizza",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obtyqt35sq55t0owwixq",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 12,
    name: "Bittoo Samosay Wala",
    image: "https://b.zmtcdn.com/data/dish_photos/458/5b008f130ff38b41c1f87d363260b458.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 13,
    name: "Sethi's The Cake Shop",
    image: "https://b.zmtcdn.com/data/pictures/2/302972/8d62178fa3729861e982606cf7a80f13_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 14,
    name: "Flavor of Punjabi",
    image: "https://b.zmtcdn.com/data/pictures/1/307511/2c93135b7d1095a7b6931bc9fb8ad13a_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Pizzas" , "Italian"],
    rating: '4.4'
},
{
    id: 15,
    name: "McDonald's",
    image: "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
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
        {Data.map((data) => <ResturantCard {...data} key={data.id} /> )}
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
