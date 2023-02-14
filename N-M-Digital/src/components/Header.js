import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"}>
          <span
            className="font-weight-bold text-uppercase"
            style={{
              fontSize: "24px",
            }}
          >
            N&M-Digital
          </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to={"/add"} className="nav-item nav-link">
              Add Item
            </Link>{" "}
            <Link to={"/categories"} className="nav-item nav-link">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
