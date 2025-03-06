import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Gadget.css";

Modal.setAppElement("#root");

const Gadget = ({ gadget, gadgetsItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gadget p-4">
      <div className="gadget-top flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{gadgetsItem}</h1>
        <Link to={`/${gadgetsItem}`} className="text-blue-500 hover:underline">
          Show More
        </Link>
      </div>
      <div className="images grid grid-cols-4 gap-4">
        {gadget.slice(0, 4).map((item) => (
          <div
            key={item.product === "Book" ? item.title : item.model}
            className="flex flex-col items-center w-auto"
          >
            <img
              src={item.imgUrl}
              alt={item.product === "Book" ? item.title : item.brand}
              className="w-32 h-32 object-cover cursor-pointer"
              onClick={() => openModal(item.imgUrl)}
            />
            <p className="mt-2 text-center">
              {item.product === "Book" ? item.title : item.brand}
            </p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="modal"
        overlayClassName="overlay"
      >
        <button
          onClick={closeModal}
          className="close-button absolute top-4 right-4 w-16"
        >
          Close
        </button>
        {selectedImage && (
          <img src={selectedImage} alt="Preview" className="preview-image" />
        )}
      </Modal>
    </div>
  );
};

export default Gadget;
