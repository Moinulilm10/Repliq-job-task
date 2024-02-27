import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CustomerForm from "../CustomerForm";

const CustomerHeading = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="flex items-center justify-between p-2 my-3 rounded-md bg-primaryBg">
      <div className="flex items-center gap-2">
        <PiUserCircleFill className="text-xl md:text-3xl text-primary" />
        <p className="text-sm font-semibold text-primary md:text-lg">
          Customer Name
        </p>
      </div>
      <IoIosAddCircleOutline
        onClick={onOpenModal}
        className="text-xl cursor-pointer text-primary md:text-2xl"
      />
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <CustomerForm onClose={onCloseModal} />
      </Modal>
    </div>
  );
};

export default CustomerHeading;
