import { baseUrl } from "./settings/api.js";
import { renderBanner } from "./utils/renderedBanner.js";
import { renderItems } from "./utils/renderedItems.js";
import { renderExclusive } from "./utils/renderedExclusiv.js";
import { logoutButton } from "./components/common/logout.js";



const bannerUrl = baseUrl + "/home";

async function createBanner() {
  try {
    const response = await fetch(bannerUrl);
    const result = await response.json();
    console.log(result);

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
    console.log(result);

    renderItems(result);
    renderExclusive(result)
    logoutButton()
  } catch (error) {
    console.log(error);
  }
}
createProducts();

