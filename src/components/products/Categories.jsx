import { SlOptionsVertical } from "react-icons/sl";
import { useProductContext } from "../../providers/Provider";
import SingleCategories from "./SingleCategories";

const Categories = ({ openDrawer }) => {
  const { categories } = useProductContext();

  return (
    <div className="flex items-center justify-between gap-2 my-3">
      <div className="flex gap-2">
        {categories.slice(0, 6).map((category, index) => (
          <SingleCategories key={index} category={category} />
        ))}
      </div>
      <SlOptionsVertical
        onClick={openDrawer}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
};

export default Categories;
