import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Store";
import Google from "./Google";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Join = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [join, setjoin] = useState(false);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (join) {
      navigate("/");
    }
  }, [join, navigate]);

  const subm = (e) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((e) => {
        toast.success("Join Successfully");
        console.log(e);
        setjoin(true);
      })
      .catch((e) => {
        console.log(e);
        const errorMessage = e.message;
        console.log(errorMessage);
        if (e.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (e.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } else {
          console.error(e);
          toast.error("An error occurred. Please try again.");
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <div className="join  m-2 p-2 flex justify-center min-h-[80vh] rewd">
        <div className="  max-w-[450px] min-w-[350px] mb:min-w-[auto] mb:w-[100%] w-[40%] min-h-[40vh]">
          <form
            className=" border border-[#fa0060] box  flex flex-col  gap-4 ed h-full p-3  rounded-[18px]  "
            onSubmit={subm}
            action="/"
          >
            <h1 className="text-4xl  text-center my-3 font-semibold  ">
              Join Now
            </h1>
            <div className="flex flex-col">
              <label className="" htmlFor="">
                Email:
              </label>
              <input
                required
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                className="max-w-[400px] min-w-[100%]   rounded-2xl py-3 sm:w-auto px-4 bg-transparent border-2 border-gray-700 focus:border-[#fa0060] focus:outline-none"
                type="email"
              />
            </div>
            <div className="flex mt-2 flex-col">
              {" "}
              <label className="" htmlFor="">
                Password:
              </label>
              <input
                required
                placeholder="Enter Password"
                value={data.password}
                onChange={(e) => setdata({ ...data, password: e.target.value })}
                className="max-w-[400px] min-w-[100%]  rounded-2xl py-3 sm:w-auto px-4 bg-transparent border-2 border-gray-700 focus:border-[#fa0060] focus:outline-none"
                type="password"
              />
            </div>
            <input
              type="submit"
              value="Join Now"
              className=" rounded-[18px] bg-[#fa0060] active:scale-[.95] font-bold cursor-pointer  p-2 m-3 mt-8"
            />
            <div className=" relative text-center">
              <span className="  bg-[#111] px-4 z-[1]">OR</span>
              <div className="line  absolute z-[-1] w-full top-1/2">
                {" "}
                <hr />{" "}
              </div>
            </div>
            <div className=" text-center ">
              {" "}
              <Google />
            </div>
            <Link
              className="text-center   hover:underline hover:text-[#fa0060] mb-6 mt-3"
              to="/login"
            >
              {" "}
              Already Have Account...?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
