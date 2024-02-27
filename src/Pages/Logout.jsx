import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase/Store";
import { toast } from "react-toastify";
const Logout = () => {
  const auth = getAuth(app);
  const conf = () => {
    let sure = confirm("You Wanna Logout..?");

    if (sure) {
      logou();
      toast.success("Logout Successfully");
    }
  };
  const logou = () => {
    signOut(auth)
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <button
          // onClick={logou}
          onClick={conf}
          className=" rounded-[18px] bg-[#fa0060] active:scale-[.95] font-bold  cursor-pointer px-6  py-3 "
        >
          {" "}
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
