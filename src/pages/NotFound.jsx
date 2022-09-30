import React from "react";

const NotFound = () =>{
    const style = {
        height: "100vh", 
        width:"100vw", 
        zIndex:10, 
        backgroundColor:"#fff", 
        position:"fixed",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }

    return(
        <div  style={style}>
            <h1>File Not Found</h1>
            <p>Either this file doesn’t exist or you don’t have permission to view it.</p>
        </div>
    );
}

export default NotFound;

