import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { signinSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function Oath() {
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      dispatch(signinSuccess(data));
        navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleClick}
        className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
      >
        Continue with Google
      </button>
    </div>
  );
}
