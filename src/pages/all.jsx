import React, { useEffect } from "react";

const All = () => {
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);
  const [meals, setMeals] = React.useState([]);

  const API_PATH = "https://themealdb.com/api/json/v1/1/search.php?s=";

  const fetchData = async () => {
    try {
      const response = await fetch(API_PATH);
      const data = await response.json();
      setMeals(data.meals.slice(0, 18));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const data = await res.json();
      setData(data.meals);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            opacity: "0.7",
            color: "whitesmoke",
          }}
        >
          Menu
        </h2>

        <div className="row">
          <form className="d-flex gap-2" onChange={handleSearch}>
            <input
              onChange={(event) => setName(event.target.value)}
              className="form-control"
              type="text"
              placeholder="Search your lovely food..."
              value={name}
            />
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="meals-wrapper w-70 d-flex flex-wrap gap-5 justify-content-center mt-5">
          {(name === "" ? meals : data).map((data) => (
            <div className="card" style={{ width: "18rem" }} key={data.idMeal}>
              <img
                className="card-img-top"
                src={data.strMealThumb}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title"> Name: {data.strMeal}</h5>
                <p className="card-text">Country: {data.strArea}</p>
                <p className="card-text  category">
                  Category : {data.strCategory}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
