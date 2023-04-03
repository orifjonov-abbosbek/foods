import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './fooddetails.css'

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
      <div className="row justify-content-center pb-5">
        <div className="card-wrapper col-6 ">
          <h4 className="text-light">{data.strMeal}</h4>
          <div className="card d-flex">
            <div className="text-black">
              <img
                className="card-img-top d-block"
                src={data.strMealThumb}
                alt="Card image cap"
                height={400}
              />
            </div>
            <div className="card-body text-black">
              <p>Category: {data.strCategory}</p>
              <p>Country: {data.strArea}</p>
              <details>
                <summary>Instruction</summary>
                <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                  Instruction: {data.strInstructions}
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
