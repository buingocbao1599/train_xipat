import React, { useState } from 'react';
import SubDashboard from './Sub_dashboard';
import "../css/Dashboard.css";
import RercDashboard from './Revr_dashboard';

function Dashboard(props) {
    const [activeSub, setActivesub] = useState(1);
    const [activeRever, setActiverever] = useState(0);

    const onChangActive = (x) => {
        const btn_sub = document.getElementById("sub_dashboard");
        const btn_rever = document.getElementById("rev_dashboard");

        if(x == "sub"){
            setActivesub(1);
            setActiverever(0);
            btn_sub.classList.add("btn_active");
            btn_rever.classList.remove("btn_active");
        } else {
            setActivesub(0);
            setActiverever(1);
            btn_sub.classList.remove("btn_active");
            btn_rever.classList.add("btn_active");
        }
    }
    return (
        <div className='dashboard_main'>
           <h1>Dashboard</h1>
           <div className='btn_dash'>
                <button id='sub_dashboard' onClick={() => onChangActive("sub")} className="btn_active">Subcription</button>
                <button id='rev_dashboard' onClick={() => onChangActive("rev")}>Revernue</button>
           </div> 
           {
             activeSub == 1 
             ? <SubDashboard/>
             : <RercDashboard />
           }
        </div>
    );
}

export default Dashboard;