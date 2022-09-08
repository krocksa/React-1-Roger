import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
	  <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Services</a>
        </li>
		<li class="nav-item">
          <a class="nav-link">Contact</a>
        </li>
		</ul>
    </div>
  </div>
</nav>
<div class="container head">
	<h1>
		A Warm Welcome!
	</h1>
	<br />
	<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor iusto dicta voluptate reprehenderit, dignissimos architecto ipsa explicabo consequatur nesciunt doloremque impedit inventore placeat cum reiciendis ea, veritatis tempora. Error.</h4><br />
	<button type="button" class="btn btn-primary btn-lg">Call to action!</button>
</div>
		</>
	);
};

export default Home;
