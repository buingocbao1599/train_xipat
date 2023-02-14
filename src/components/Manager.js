import React, { useState, useEffect } from "react";
import "../css/Manager.css";
import Quickview_Manager from "./Quickview_Manager";


const Manager = () => {
  const [api, setApi] = useState([]);
  const [dataFilt, setDataFilt] = useState([]);
  const [showQ, setShowQ] = useState(false);
  const [dataQ, setDataQ] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const result = await response.json();
      setDataFilt(result);
      return setApi(result);
    };

    callApi();
  }, []);

//   console.log("dataCallApi: ", api);

  const handleQuick = (post) => {
    if(showQ == false){
        setShowQ(true);
        setDataQ(post)
    } else {
        setShowQ(false);
    }
  }


  const handleCloseQuick = () => {
    if(showQ == false){
        setShowQ(true);
    } else {
        setShowQ(false);
    }
  }

  const handleFilter = () => {
    const valueIn = document.getElementById('input_Fil').value;;
    const dataFilted = dataFilt.filter((post) => post.id == valueIn)
    setApi(dataFilted);
  }

  return (
    <>
        {
            showQ == false ?
            <div className="manager-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Manager</h1>
      
              <div className="manager_select">
                <input placeholder="hay nhap id muon tim" id="input_Fil"/>
                <div onClick={() => handleFilter()}>Filter</div>
              </div>
            </div>
      
            <form>
              <table id="manager_table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {api.map((post) => {
                    return (
                      <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td onClick={() => handleQuick(post)}>View</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </form>
          </div>
          :
          <Quickview_Manager data={dataQ} handleCloseQuick={handleCloseQuick}/>
        }   
    </>
    
   
  );
};

export default Manager;
