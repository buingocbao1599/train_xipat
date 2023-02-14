import React from "react";
import "../css/Quickview.css";
import Pic1 from "./img/download.png";

function Quickview_Manager({ data, handleCloseQuick }) {
  console.log("datas: ", data);

  return (
    <div className="quickview_main" id="quickview">
      <div className="img_quick">
        <img src={Pic1} alt="anh chua co"></img>
      </div>
      <div className="quickview-content">
        <div>ID: {data.id}</div>
        <div>Title: {data.title}</div>
        <div>Body: {data.body}</div>
        <div>UserID: {data.userId}</div>
      </div>
      <button className="btn_close" onClick={() => handleCloseQuick()}>
        X
      </button>
    </div>
  );
}

export default Quickview_Manager;
