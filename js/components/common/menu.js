import { getUsername } from "../storage.js";

const logout = document.querySelector(".logout")
const login = document.querySelector(".login")
const addproduct =  document.querySelector(".addproduct")

export  function createMenu() {
    
  const username = getUsername();

  if (username) {

   logout.style.display = "block";
   addproduct.style.display = "block";
   login.style.display ="none";
   
  }else {
        logout.style.display = "none";
        addproduct.style.display = "none";
        login.style.display ="block";     
           
  }
 
}

