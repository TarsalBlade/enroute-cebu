import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDc0xklvS70P27qhExxxRQ7Wlg88rGeHlY",
    authDomain: "enroute-web.firebaseapp.com",
    projectId: "enroute-web",
    storageBucket: "enroute-web.firebasestorage.app",
    messagingSenderId: "571379862604",
    appId: "1:571379862604:web:eae6de8ea99ec82fda78e9",
    measurementId: "G-2FBHXPE3T0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log("User is signed in:", user);
    // You could potentially personalize the page here, e.g., display user.displayName
  } else {
    // User is signed out
    console.log("User is signed out");
    // Redirect back to login page if not authenticated
    window.location.href = 'index.html'; // Assuming your login page is login.html
  }
});

// --- Logout Function ---
window.logout = function() {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Logout successful");
      window.location.href = 'index.html'; // Redirect to login page after logout
    }).catch((error) => {
      // An error happened.
      console.error("Logout Error:", error);
      alert("Logout failed: " + error.message);
    });
} 
