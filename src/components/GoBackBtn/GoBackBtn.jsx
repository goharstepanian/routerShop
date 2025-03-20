import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBackBtn.css";

const GoBackBtn = () => {
  let navigate = useNavigate();
  return (
    <div className="go-back-btn-container">
      <button className="go-back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default GoBackBtn;
