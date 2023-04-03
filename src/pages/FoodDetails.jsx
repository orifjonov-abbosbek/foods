import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals[0]))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(data);

  return (
    <div className="container">
      <h4 className="text-light">{id} - idlik Taom</h4>
      <div className="card">
        <div className="d-flex text-black">
          <img
            className="card-img-top"
            src={data.strMealThumb}
            alt="Card image cap"
          />
          <div className="card-body">
            <h2>{data.strMeal}</h2>
            {/* <h6 className="card-title">Name: {data.strMeal.slice(0, 20)}...</h6> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
