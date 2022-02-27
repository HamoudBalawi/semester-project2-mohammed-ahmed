
export function logoutButton(){
    const button = document.querySelector(".logout");
  
        button.onclick = function (){
           // clearStorage();
           localStorage.removeItem("user");
           localStorage.removeItem("token");
            location.href = "/";
        }
    

}