import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth  } from "firebase/auth";

// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyDALPlcy2gdKGP4xgnvUNrzYoRZNQjafMc",
//   authDomain: "logingcp-68191.firebaseapp.com",
//   projectId: "logingcp-68191",
//   storageBucket: "logingcp-68191.appspot.com",
//   messagingSenderId: "85125364223",
//   appId: "1:85125364223:web:fb9a5fc7b206b6bc460fca"
// };

export const firebaseConfig = {
  apiKey: "AIzaSyBmsUlsWQd4eX0rTKrslWnp7CGTef6jSNs", //apikey
  authDomain: "cdt-principal.firebaseapp.com" //authdomain
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
  prompt : "select_account "
});

// auth
const auth = getAuth(app);

const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export { auth, signInWithGooglePopup };