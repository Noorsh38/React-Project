import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-5">
        {" "}
        <button className="btn btn-dark">OUR CATEGORIES</button>{" "}
      </div>
      <div className="d-flex justify-content-center mt-3">
        {" "}
        <span className="text text-center">
          Finding Best Products Now
          <br /> in Your Fingertips
        </span>{" "}
      </div>
      <div className="row mt-2 g-4">
        <div
          onClick={() => {
            navigate("/products/Xbox");
          }}
          className="col-md-4 "
        >
          <div className="card p-1">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                {" "}
                <span>Xbox</span>
              </div>
              <div>
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/88px-Xbox_one_logo.svg.png?20170527203134"
                  height="88"
                  width="90"
                  alt="Xbox"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/products/Playstation");
          }}
          className="col-md-4 "
        >
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                {" "}
                <span>Playstation</span>{" "}
              </div>
              <div>
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/134px-Playstation_logo_colour.svg.png"
                  height="80"
                  width="100"
                  alt="Playstation"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/products/Netindo");
          }}
          className="col-md-4 "
        >
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                {" "}
                <span>Nintendo</span>{" "}
              </div>
              <div>
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/600px-Nintendo.svg.png?20170720163516"
                  height="80"
                  width="200"
                  alt="Nintendo"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
