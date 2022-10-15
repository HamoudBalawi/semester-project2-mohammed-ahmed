import { getUsername } from "../storage.js";

/**
 * createMenu displays innerHTML based on if a user logged in or logged out
 */
const logout = document.querySelector(".logout");
const login = document.querySelector(".login");
const addproduct = document.querySelector(".addproduct");
const admin = document.querySelector(".fa-user");

export function createMenu() {
  const username = getUsername();

  if (username) {
    logout.style.display = "block";
    addproduct.style.display = "block";
    login.style.display = "none";
    admin.style.display = "block";
  } else {
    logout.style.display = "none";
    addproduct.style.display = "none";
    login.style.display = "block";
    admin.style.display = "none";
  }
}
