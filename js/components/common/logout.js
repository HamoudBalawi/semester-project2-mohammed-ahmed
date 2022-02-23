import { clearStorage} from "../storage.js"

export function logoutButton(){
    const button = document.querySelector("#logout");
  
    if(button){
        button.onclick = function (){
            clearStorage();
            location.href = "/";
        }
    }

}