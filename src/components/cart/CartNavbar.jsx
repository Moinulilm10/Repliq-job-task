import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdClose, MdOutlineLocalShipping } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import { TbRefreshDot } from "react-icons/tb";
import { VscMenu } from "react-icons/vsc";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import AddItemForm from "../AddItemForms";
import IconButton from "../IconButton";
// import NoteKeeping from "../NoteKeeping";
// import ShippingAddress from "../ShippingAdress";

const CartNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="">
        <VscMenu className="md:text-3xl" onClick={toggleDrawer} />
      </div>
      <IconButton
        icon={<PiNotePencilLight />}
        label={"Note"}
        onClick={onOpenModal}
      />
      <IconButton
        icon={<MdOutlineLocalShipping />}
        label={"Shipping"}
        onClick={onOpenModal}
      />
      <IconButton icon={<TbRefreshDot />} label={"Hold Orders"} />
      <IconButton
        icon={<IoIosAddCircle />}
        label={"New Item"}
        onClick={onOpenModal}
      />
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
          <h1 className="flex items-start p-5 text-4xl font-bold text-center text-sky-600">
            Shop Keeper
          </h1>
          <div className="flex flex-col p-2">
            <h1 className="">Dashboard</h1>
            <h1 className="">About</h1>
            <h1 className="">Privacy</h1>
          </div>
        </div>
      </Drawer>

      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <AddItemForm onClose={onCloseModal} />
      </Modal>

      {/* <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <ShippingAddress onClose={onCloseModal} />
      </Modal> */}

      {/* <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <NoteKeeping onClose={onCloseModal} />
      </Modal> */}
    </div>
  );
};

export default CartNavbar;
