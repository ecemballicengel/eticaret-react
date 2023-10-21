import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [urun, setUrun] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setUrun(res.data.products);
        let categoryArray = [];
        res.data.products.forEach((element) => {
          if (!categoryArray.includes(element.category)) {
            categoryArray.push(element.category);
          }
        });
        setCategory(categoryArray);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ProductContext.Provider value={{ urun, setUrun, category }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
