import { baseUrl } from "./settings/api.js";
import { createMenu} from "./components/common/menu.js"
import { searchProduct } from "./components/common/searchProducts.js";
import { displayMessage } from "./components/common/displayMessage.js"
import { renderedAdmin } from "./utils/renderedAdmin.js";
import { logoutButton} from "./components/common/logout.js"


createMenu()
logoutButton()

const url = baseUrl + "/products";

async function createProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    renderedAdmin(result)
    searchProduct(result)
  
  } catch (error) {
    console.log(error);
     displayMessage("error", "Unknown error occured", ".elements-container");
  }
}
createProducts();

  //  <i class="fa fa-trash" data-id="${details.id}"></i>