import React from "react";
import { CategoryStyle } from "./index.style";

export const SelectCategory = () => {
  const categories = useSelector(getCategories);

  return (
    <CategoryStyle>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </CategoryStyle>
  );
};
