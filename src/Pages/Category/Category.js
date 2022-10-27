import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://tech-learn-server-ruddy.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-5">
      {categories.map((category) => (
        <h5 className="mb-3 p-2" key={category.id}>
          <Link
            className="text-decoration-none "
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        </h5>
      ))}
    </div>
  );
};

export default Category;
