import { renderedDetails } from "./utils/renderedDetails.js";
import { handleClick } from "./components/handleClick.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:1337/products/" + id;


async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    //console.log(details);
    renderedDetails(details);
   
  handleClick()

   
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

