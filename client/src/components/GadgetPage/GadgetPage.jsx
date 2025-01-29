import React, { useState, useEffect } from "react";
import RightGadget from "../RightGadget/RightGadget";
import "./GadgetPage.css";

const GadgetPage = ({ dataList, index }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Reset selected items when the category changes
    setSelectedItems([]);
  }, [index]);

  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
    setSelectedItems((prevSelectedItems) => {
      if (isChecked) {
        const items = dataList[index].filter((selItem) =>
          selItem.product === "Book"
            ? selItem.author === item.author
            : selItem.brand === item.brand
        );
        const uniqueItems = new Set([...prevSelectedItems, ...items]);
        return Array.from(uniqueItems);
      } else {
        return prevSelectedItems.filter((selectedItem) =>
          selectedItem.product === "Book"
            ? selectedItem.author !== item.author
            : selectedItem.brand !== item.brand
        );
      }
    });
  };

  // Get unique label values
  const uniqueLabels = Array.from(
    new Set(
      dataList[index].map((item) =>
        item.product === "Book" ? item.author : item.brand
      )
    )
  );

  return (
    <div className="gadget-container">
      <div className="category">
        {uniqueLabels.map((label) => (
          <li className="check-item" key={label}>
            <input
              id={label}
              type="checkbox"
              name="name"
              onChange={(event) => {
                const item = dataList[index].find((item) =>
                  item.product === "Book"
                    ? item.author === label
                    : item.brand === label
                );
                handleCheckboxChange(event, item);
              }}
            />
            <label htmlFor={label}>{label}</label>
          </li>
        ))}
      </div>
      <RightGadget gadgetData={selectedItems} />
    </div>
  );
};

export default GadgetPage;
