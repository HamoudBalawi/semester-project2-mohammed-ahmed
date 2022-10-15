const tokenKey = "token";
const userKey = "user";

/**
 * saveToken saves token to local storage
 * @param {string} token the value of the token
 * @example
 * saveToken(token)
 */

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

/**
 * getToken gets a token from local storage
 * @returns {string} the property of a token
 * @example
 * const token = getToken();
 * console.log(token);
 * //logs:
 * // jwt: "hfhwfihiosfhwefjwoefjoewjfwefjw"
 */

export function getToken() {
  return getFromStorage(tokenKey);
}

/**
 * fetchStoredProducts gets items from the local storage
 * @returns {array.<Object>} the properties of objects of an array
 * const items = fetchStoredProducts()
 * console.log(items)
 * // Logs:
 * // Image
 * // Adidas
 * // 45
 */

export function fetchStoredProducts() {
  const cart = localStorage.getItem("shoppingcart");

  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

/**
 * storeProducts stores array of objects in local storage
 * @param {array.<Object>} cart array of objects
 * @example
 * storeProducts(cart)
 */

export function storeProducts(cart) {
  localStorage.setItem("shoppingcart", JSON.stringify(cart));
}

/**
 * saveUser saves a user ceredntails to local storage
 * @param {object} user values of object
 * @example
 * saveUser(user);
 */

export function saveUser(user) {
  saveToStorage(userKey, user);
}

/**
 * getUsername gets a username from local storage
 * @returns {string} the property of the user
 * const user = getUsername()
 * conslog.log(user)
 * //Logs:
 * mohammed
 */

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

/**
 * saveToStorage saves in the local storage
 * @param {string} key
 * @param {string} value
 * @example
 * saveToStorage(auth,user)
 */

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * getFromStorage gets an object from local storage
 * @param {object} key the properties of an object
 * @returns
 * const user = getFromStorage()
 * console.log(user)
 * // Logs:
 * // jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 * // email: "alphamass87@gmail.com"
 * // username: "mohammed"
 */

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

/**
 * clearStorage deletes data stored in local storage
 */

export function clearStorage() {
  localStorage.clear();
}
