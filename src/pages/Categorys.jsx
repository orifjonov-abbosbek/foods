import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Categorys = () => {
  const [data, setData] = useState([]);
  const { categorys } = useParams();
  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${categorys}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3">
        <span
          onClick={() => navigate("/categories")}
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
        >
          ⌫
        </span>
        <h1 style={{ color: "white" }}>{categorys} - taomlar</h1>
      </div>
      <div className="meals-wrapper w-70 d-flex flex-wrap gap-4 justify-content-center mt-5">
        {data?.meals?.map((data) => (
          <Link to={`/categories/${categorys}/${data.idMeal}`}>
            <div
              className="card cursor-pointer"
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => console.log("clicked")}
            >
              <img
                className="card-img-top"
                src={data.strMealThumb}
                alt="Card image cap"
              />
              <div className="card-body">
                <h6 className="card-title">
                  Name: {data.strMeal.slice(0, 20)}...
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
