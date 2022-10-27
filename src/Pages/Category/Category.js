import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>category:{categories.length}</h3>
      {categories.map((category) => (
        <h5 key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </h5>
      ))}
    </div>
  );
};

export default Category;
