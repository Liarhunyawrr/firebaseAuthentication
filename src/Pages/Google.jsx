import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/Store";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [join, setjoin] = useState(false);
  useEffect(() => {
    if (join) {
      navigate("/");
    }
  }, [join, navigate]);
  const goog = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        toast.success("Authentication Successfull");
        setjoin(true);
        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.customData.email;
        console.log(email);
        toast.error("Authentication failed");

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };
  return (
    <button
      onClick={goog}
      type="button"
      className="login-with-google-btn  red  cursor-pointer"
    >
      Continue with Google
    </button>
  );
};

export default Google;
