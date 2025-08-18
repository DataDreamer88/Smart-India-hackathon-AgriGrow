import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates-container">
      {UpdatesData.map((update, index) => {
        return (
          <div className="update-box" key={index}>
            <div className="update">
              <div className="noti">
                <div style={{ marginBottom: "0.5rem" }}>
                  <span>{update.name}</span>
                  <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
