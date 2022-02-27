import { baseUrl } from "./settings/api.js";
import { renderBanner } from "./utils/renderedBanner.js";
import { renderExclusive } from "./utils/renderedExclusiv.js";
import { logoutButton} from "./components/common/logout.js";
import { createMenu} from "./components/common/menu.js";
import { renderFeatured } from "./utils/renderedFeatured.js";

createMenu()
logoutButton()

const bannerUrl = baseUrl + "/home";

async function createBanner() {
  try {
    const response = await fetch(bannerUrl);
    const result = await response.json();
  

    renderBanner(result);
    
  } catch (error) {
    console.log(error);
  }
}
createBanner();


const url = baseUrl + "/products";


async function createProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
   renderExclusive(result)
   renderFeatured(result);
   
  } catch (error) {
    console.log(error);
  }
}
createProducts();

