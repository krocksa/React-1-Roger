import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <div class="navbar-brand" href="#">Start Bootstrap</div>
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
	<h2>
		A Warm Welcome!
	</h2>
	<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor iusto dicta voluptate reprehenderit, dignissimos architecto ipsa explicabo consequatur nesciunt doloremque impedit inventore placeat cum reiciendis ea, veritatis tempora. Error.</h6>
	<button type="button" class="btn btn-primary btn-lg">Call to action!</button>
</div>
<div class=" container body">
    <div class="row row-max">
      <div class="col col-max">
        <div class="row row-int">
          <div class="col-sm-3 col-int">
              <div class="row row-3">
                <div class="col-sm-4 body-head">
                  500 X 325
                </div>
                <div class="col-sm-6 body-center">
                  <br />
                  <h4>Card Title</h4>
                  <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sunt voluptatem excepturi eaque aliquid.</h6>
                </div>
                <div class="col-sm-2 body-footer">
                    <button type="button" class="btn btn-primary boot">Find Out More!</button>
                </div>
              </div>
          </div>
      <div class="col-sm-3 col-int">
      <div class="row row-3">
                <div class="col-sm-4 body-head">
                  500 X 325
                </div>
                <div class="col-sm-6 body-center">
                  <br />
                  <h4>Card Title</h4>
                  <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sunt voluptatem excepturi eaque aliquid.</h6>
                </div>
                <div class="col-sm-2 body-footer">
                    <button type="button" class="btn btn-primary boot">Find Out More!</button>
                </div>
              </div>
      </div>
      <div class="col-sm-3 col-int">
      <div class="row row-3">
                <div class="col-sm-4 body-head">
                  500 X 325
                </div>
                <div class="col-sm-6 body-center">
                  <br />
                  <h4>Card Title</h4>
                  <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sunt voluptatem excepturi eaque aliquid.</h6>
                </div>
                <div class="col-sm-2 body-footer">
                    <button type="button" class="btn btn-primary boot">Find Out More!</button>
                </div>
              </div>
      </div>
      <div class="col-sm-3 col-int">
      <div class="row row-3">
                <div class="col-sm-4 body-head">
                  500 X 325
                </div>
                <div class="col-sm-6 body-center">
                  <br />
                  <h4>Card Title</h4>
                  <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sunt voluptatem excepturi eaque aliquid.</h6>
                </div>
                <div class="col-sm-2 body-footer">
                    <button type="button" class="btn btn-primary boot">Find Out More!</button>
                </div>
              </div>
      </div>
        </div>
    </div>
      </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand nav-footer" href="#">Copyriht &copy; Your Website 2022</a>
</nav>
		</>
	);
};

export default Home;
