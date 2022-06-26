import React from "react";
import cat1 from "../../assests/cat1.jpg";
import cat2 from "../../assests/cat2.jpg";
import cat3 from "../../assests/cat3.jpg";
import cat4 from "../../assests/cat4.jpg";
import styles from "./category.module.scss";

const Caterogry = () => {
  const categories = [
    {
      img: cat1,
      name: "electronics",
      id: 1,
    },
    {
      img: cat2,
      name: "jewelery",
      id: 2,
    },
    {
      img: cat3,
      name: "men's clothing",
      id: 3,
    },
    {
      img: cat4,
      name: "women's clothing",
      id: 4,
    },
  ];
  return (
    <div className="pt-5 container">
      <h3 className="py-2">Shop by Caterogry</h3>
      <div className={`${styles.categoryWrapper}`}>
        {categories.map((Category) => {
          return (
            <div key={Category.id}>
              <div
                className="category"
                style={{
                  backgroundImage: `url(${Category.img})`,
                }}
              >
                <h5 className="text-white px-3">
                  {Category.name.toUpperCase()}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Caterogry;
