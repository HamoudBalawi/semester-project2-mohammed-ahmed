const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function fetchStoredProducts() {
  const cart = localStorage.getItem("shoppingcart");
  
  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);

  }
}
export function storeProducts(cart) {
  localStorage.setItem("shoppingcart", JSON.stringify(cart));
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value);
}

export function clearStorage(){
    localStorage.clear()
}