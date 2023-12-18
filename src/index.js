import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";

const signoutButton = document.querySelector("#signoutButton");

signoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      window.location = "../public/login.html";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});
