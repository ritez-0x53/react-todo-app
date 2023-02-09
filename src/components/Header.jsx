import React from "react";

const style = {
     display : "flex",
     justifyContent : "center",
     alignItems : "center",
     gap : "2px"
}

export const Header = () => {
     return (
          <div className="header">
               <div style={style} >
               <img src="/img/todo.png" width={"35px"} alt="" />
               <h1>React_Todo_App</h1>
               </div>

               <p>Build with &hearts; by Riteswar</p>
          </div>
     )
}