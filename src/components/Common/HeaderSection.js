import React from "react";

const HeaderSection = ({ title, btnTitle }) => {
  return (
    <div className="d-flex my-4 justify-content-between align-items-center">
      <h3>{title}</h3>
      <button
        type="button"
        class="btn d-flex align-items-center btn-outline-secondary"
      >
        {btnTitle}
        <i className="fa ml-2 d-flex justify-content-center align-items-center fa-long-arrow-right"></i>
      </button>
    </div>
  );
};

export default HeaderSection;
