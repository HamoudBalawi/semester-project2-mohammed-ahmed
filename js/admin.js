import { baseUrl } from "./settings/api.js";
import { createMenu} from "./components/common/menu.js"
import { searchProduct } from "./components/common/searchProducts.js";
import { renderedAdmin } from "./utils/renderedAdmin.js";
import { logoutButton} from "./components/common/logout.js"



createMenu()
logoutButton()

const url = baseUrl + "/products";

async function createProducts() {
  try {

    const response = await fetch(url);
    const result = await response.json();

    renderedAdmin(result)
    searchProduct(result)
  
  } catch (error) {
    console.log(error);
  }
}
createProducts();

  