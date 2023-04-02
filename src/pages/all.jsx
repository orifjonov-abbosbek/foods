import React, { useEffect } from 'react'
const All = () => {
  const API_PATH = "https://themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(API_PATH);
      const data = await response.json();
      setMeals(data.meals)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  
  
   return (
     <>
       <div className="container">
        <div className="meals-wrapper w-70 d-flex flex-wrap gap-5 justify-content-center mt-5">
         {meals.map((data) => (
           <div className="card" style={{ width: "18rem" }}>
             <img
               className="card-img-top"
               src={data.strMealThumb}
               alt="Card image cap"
             />
             <div className="card-body">
               <h5 className="card-title">{data.strMeal}</h5>
               <p className="card-text">{data.strArea}</p>
             </div>
           </div>
         ))}
        </div>
       </div>
     </>
   );
  };



export default All;

