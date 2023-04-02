// Categories.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {categories.length > 0 ? (
   
          <div className="container">
            <div className="category-wrapper mt-3">
              {categories.map((category) => (
                <div className="list-group d-flex" key={category.idCategory}>
                  <Link to="/bycategories" className="list-group-item mb-2">
                    {category.idCategory} {category.strCategory}
                  </Link>
                </div>
              ))}
            </div>
          </div>
       
      ) : (
        <div style={{textAlign: 'center'}}>Loading...</div>
      )}
    </>
  );
};

export default Categories;
