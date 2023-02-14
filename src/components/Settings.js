import React, { useEffect, useState } from 'react';
import "../css/Settings.css"

function Settings(props) {
    const [showBtn, setShowBtn] = useState(false);
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("");
    const [date, setDate] = useState("");
    const [dataSave, setDataSave] = useState([])


    
    const handleShowBtn = () => {
            const titleS = document.getElementById("title");
            const emailS = document.getElementById("email");
            const colorS = document.getElementById("color");
            const dateS= document.getElementById("date");
            if(titleS.value == "" && emailS.value == "" && colorS.value == "" && dateS.value == ""){
                setShowBtn(false)
            } else {
                setShowBtn(true)
            }
    } 

    const handleSave = (event) => {
        event.preventDefault();
        const formValues = {
            title: title,
            email: email,
            color: color,
            date: date
        };

        const newValue = [...dataSave, formValues]

        setDataSave(newValue);
    }

    console.log("title: ", title);
    console.log("email: ", email);
    console.log("color: ", color);
    console.log("date: ", date);
    console.log("dataSave: ", dataSave);

    return (
        <div className='setting_main'>
            <h1>Settings</h1>
            <div className='top' style={{display: 'flex'}}>
                <div className='title'>
                    <p>Title: </p>
                    <input placeholder='hay nhap title' onChange={(e) => {
                        setTitle(e.target.value);
                        handleShowBtn()
                    }} id="title"/>
                </div>
                <div className='email'>
                    <p>Email: </p>
                    <input placeholder='hay nhap mail' onChange={(e) => {
                        setEmail(e.target.value);
                        handleShowBtn();
                    }} id="email"/>
                </div>
            </div>
            <div className='bottom' style={{display: 'flex'}}>
                <div className='background'>
                    <p>Background Color: </p>
                    <input placeholder='hay nhap Background Color' onChange={(e) => {
                        setColor(e.target.value);
                        handleShowBtn();
                    }} id="color"/>
                </div>
                <div className='date'>
                    <p>Active date: </p>
                    <input placeholder='hay nhap date' onChange={(e) => {
                        setDate(e.target.value);
                        handleShowBtn();
                    }} id="date"/>
                </div>
            </div>
            {
                showBtn == true ? <button onClick={(e) => handleSave(e)}>SAVE</button> : <div></div>
             
            }
        </div>
    );
}

export default Settings;