import { isString } from 'lodash-es';
import React, { useEffect, useState } from 'react';
import "../css/Settings.css"
import Calendar from './Calendar';

function Settings(props) {
    const [showBtn, setShowBtn] = useState(false);
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("");
    const [date, setDate] = useState("");
    const [dataSave, setDataSave] = useState([]);

    
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
        if(checkValidateForm()){
            setDataSave(newValue);
            document.getElementById("text_title").innerHTML = "";
            document.getElementById("text_email").innerHTML = "";
        } else {
            alert("hay kiem tra cac gia tri");
        }
    }

    console.log("title: ", title);
    console.log("email: ", email);
    console.log("color: ", color.hex);
    console.log("date: ", date);
    console.log("dataSave: ", dataSave);
    console.log("input: ", color);

    const checkValidateForm = () => {
        let textTitl, textEmail, textColor, textDate;
        let result = true;
        const validateColor = (color) => {
            const regExp = new RegExp('a-z0-9');
            const text  = email.slice(1, 7);
            // const vt1 = color.chartAt(0);
            if (color.length == 7 && regExp.test(String(text).toLocaleLowerCase))
            {
                return (true)
            }
            return (false)
        }

        const validate = (email) => {
            const expression = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i
            return expression.test(String(email).toLowerCase())
          }

        if( isNaN(title)){
            textTitl = "Valid must be number"
            result = false;
        }

        if(validate(email) != true){
            textEmail = "Invalid Email!";
            result=false
        }

        if(validateColor(color) != true){
            textEmail = "Invalid Email!";
            result=false
        }

        

        document.getElementById("text_title").innerHTML = textTitl;
        document.getElementById("text_email").innerHTML = textEmail;

        return result;
    }


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
                    <p id='text_title'></p>
                </div>
                <div className='email'>
                    <p>Email: </p>
                    <input placeholder='hay nhap mail' onChange={(e) => {
                        setEmail(e.target.value);
                        handleShowBtn();
                    }} id="email"/>
                    <p id='text_email'></p>
                </div>
                {
                    showBtn == true ? <button onClick={(e) => handleSave(e)} id="save">SAVE</button> : <div></div>
                }
            </div>
            <div className='bottom' style={{display: 'flex'}}>
                <div className='background'>
                    <p>Background Color: </p>
                    <input placeholder='hay nhap Background Color' onChange={(e) => {
                        setColor(e.target.value);
                        handleShowBtn();
                    }} id="color" value={color}/>
                    <p id='text_background'></p>
                    <br/>
                    <br/>
                    <input type="color" style={{backgroundColor: color, height: "100px"}} onChange={(e) => setColor(e.target.value)} value={color}/>
                </div>
                <div className='date'>
                    <p>Active date: </p>
                    <input placeholder='hay nhap date' onChange={(e) => {
                        setDate(e.target.value);
                        handleShowBtn();
                    }} id="date"/>
                    <p id='text_color'></p>

                    <Calendar />
                </div>
            </div>
            
        </div>
    );
}

export default Settings;