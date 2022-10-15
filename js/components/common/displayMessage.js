/**
 * Displays a message to the user
 * @param {string} messageType the first value
 * @param {string} message the second value
 * @param {string} targetElement the third value
 * @example
 * displayMessage("warning", "Please supply proper values", ".message-container");
 * Creates innerHTML that displays
 * // Please supply proper values
 */

export function displayMessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);
  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
