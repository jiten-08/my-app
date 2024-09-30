import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="img-container">
          <box-icon
            type="logo"
            height="3rem"
            width="3rem"
            color="#7027BF"
            name="medium-old"
          ></box-icon>
          BlogShelf
        </div>
        <div className="edit-nav">
          <Link to={"/"}>
            <button className="add-btn">
              <ion-icon name="pencil-outline"></ion-icon>
            </button>
          </Link>
          <Link to={"/tasklist"}>
            <button className="add-btn" type="button">
              <ion-icon name="list"></ion-icon>
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
