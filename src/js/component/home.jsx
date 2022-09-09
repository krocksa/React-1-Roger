import React from "react";
import Navbar from "./Navbar.jsx";
import Head from "./Head.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
		<Navbar />

    <Head />

    <Body />

    <Footer/>
		</>
	);
};

export default Home;
