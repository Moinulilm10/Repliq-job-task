import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdClose, MdOutlineLocalShipping } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import { TbRefreshDot } from "react-icons/tb";
import { VscMenu } from "react-icons/vsc";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import IconButton from "../IconButton";

const CartNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="">
        <VscMenu className="md:text-3xl" onClick={toggleDrawer} />
      </div>
      <IconButton icon={<PiNotePencilLight />} label={"Note"} />
      <IconButton icon={<MdOutlineLocalShipping />} label={"Shipping"} />
      <IconButton icon={<TbRefreshDot />} label={"Hold Orders"} />
      <IconButton icon={<IoIosAddCircle />} label={"New Item"} />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
        size={300}
      >
        <div>
          <MdClose
            onClick={toggleDrawer}
            className="absolute text-2xl cursor-pointer right-5 top-5"
          />
          <h1 className="p-5 text-4xl font-bold text-center text-sky-600">
            Repliq
          </h1>
          <div className="flex flex-col p-2">
            <h1>Dashboard</h1>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CartNavbar;
