// TODO: We will go over what these import statements are
// doing in a seperate class
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Part B Exercise code below
const Logo = () => {
  return <h1>🧇 Waffle On</h1>;
};

const NavMenu = () => {
  return (
    <>
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="tel:+64210000000" class="nav-link">
            Call Us
          </a>
        </li>
        <li class="nav-item">
          <a href="mailto:order@waffle.on?subject=order" class="nav-link">
            Email
          </a>
        </li>
      </ul>
    </>
  );
};

const Menu = ({ title }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        <MenuItem
          title="Strawberry Waffles"
          price="$10"
          imgSrc="/waffles-strawberry.jpg"
        />
        <MenuItem
          title="Blueberry waffles"
          price="$10"
          imgSrc="/waffles-blueberry.jpg"
        />
        <MenuItem
          title="Fried chicken waffles"
          price="$12"
          imgSrc="/waffles-chicken.jpg"
        />
      </ul>
    </>
  );
};

const BeveragesMenu = ({ title, CoffeeMenuItem, JuiceMenuItem }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        <MenuItem title="Coffee" price="$4" imgSrc="/coffee.jpg" />
        <MenuItem title="Orange Juice" price="$3" imgSrc="/orange-juice.jpg" />
      </ul>
    </>
  );
};

const MenuItem = ({ title, price, imgSrc }) => {
  return (
    <li>
      <p>
        {title} - {price}
      </p>
      <p>
        <img src={imgSrc} alt={title} width="50%" />
      </p>
    </li>
  );
};

function Homepage() {
  return (
    <div class="container">
      <Logo />
      <NavMenu />
      <article class="homepage">
        <h2>Waffle you like to order?</h2>
        <p>Come on in and get your waffle of fitness.</p>

        <h3>Menu</h3>
        <Menu title="Waffles" />
        <BeveragesMenu />
      </article>

      <footer class="footer">
        Created by the Waffle On Cooperative, {new Date().getFullYear()}
      </footer>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.getElementById("root"));
