import React, { useState } from "react";

import "./CSS/LoginSignUp.css"
const LoginSignup = ()=>{
    const [state,setState]=useState("Login");
    const[formdata,setformdata]=useState({
        name:"",
        password:"",
        email:""
    })
    const login= ()=>{
        console.log("login");
        console.log(formdata);
        let responseData;
        fetch("http://localhost:8000/auth/login",{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formdata)
        })
        .then((res)=>res.json())
        .then((data)=>{responseData=data
            if(responseData.success){
                sessionStorage.setItem("auth-token",responseData.token);
                window.location.replace("/")
            }
            else{
                alert(responseData.message);
                sessionStorage.removeItem("auth-token")
            }
        })
        

    }
    const signup=()=>{
        console.log("signup")
        console.log(formdata);
        let responseData;
        fetch("http://localhost:8000/auth/signup",{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formdata)
        })
        .then((res)=>res.json())
        .then((data)=>{
            responseData=data;
            console.log(data)
            if(responseData.success){
                sessionStorage.setItem("auth-token",responseData.token);
                window.location.replace("/");
            }
            else{
                alert(responseData.errors)
                sessionStorage.removeItem("auth-token")
            }
    })
        
    }
    const changeHandler=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
       
    }
    return(
        <>
            <div className="loginsignup">
           <div className="loginsignup-container">
            <h1>
                {
                    state==="Login"?"Login":"Sign up"
                }
            </h1>
            <div className="loginsignup-fields">
                {
                    state==="Login"?"":<input type="text" name="name" value={formdata.name} onChange={(e)=>changeHandler(e)} placeholder="Your Name" />
                }
                
                <input type = "email" value={formdata.email}name="email" onChange={(e)=>changeHandler(e)} placeholder="Your Email"/>
                <input type = "password" value = {formdata.password} name="password" onChange={(e)=>changeHandler(e)} placeholder="Password"/>
            </div>
            {
                state==="Login"? <button onClick={()=>login()}>Continue</button>: <button onClick={()=>signup()}>Continue</button>
            }
           
            {   state==="Login"?
            <p className="loginsignup-login">if you don't have an account? <span onClick={()=>setState("signup")}>click here</span></p>:
            <p className="loginsignup-login">Already have an account? <span onClick={()=>setState("Login")}>Login Here</span></p>}
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing , i agree to the terms of use & privacy policy.</p>
            </div>
           </div> 
        </div>

        </>
       
    )
}
export default LoginSignup