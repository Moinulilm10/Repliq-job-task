import { MdClose } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SingleCategories from "./SingleCategories";

const SideMenu = ({ toggleDrawer, categories, isOpen }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className=""
      size={600}
    >
      <div className="p-5">
        <MdClose className="absolute text-3xl right-8" onClick={toggleDrawer} />
        <h4 className="mb-5 font-semibold text-center">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 7).map((category, index) => (
            <SingleCategories key={index} category={category} />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenu;
