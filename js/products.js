import { baseUrl } from "./settings/api.js";
import { renderedProducts } from "./utils/renderedProducts.js";
import { searchProduct } from "./components/common/searchProducts.js";
import { createMenu } from "./components/common/menu.js";
import { displayMessage} from "./components/common/displayMessage.js"
import { logoutButton } from "./components/common/logout.js";

createMenu()
logoutButton()

const url = baseUrl + "/products";


async function createProducts() {
  try {

    const response = await fetch(url);
    const result = await response.json();

    renderedProducts(result)
    searchProduct(result)
    
  } catch (error) {
    console.log(error);
     displayMessage("error", "Unknown error occured", ".elements-container");
  }
}
createProducts();