import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Logout from "./Logout";

const Home = () => {
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setPhoto(user.photoURL);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(photo);
  }, [photo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="  min-h-[80vh] flex items-center justify-center p-2">
        <div className=" rounded-3xl min-w-[30%] max-h-[200px]  flex  flex-col justify-evenly items-center border border-[#fa0060] m-2 min-h-[40vh] p-2">
          <div className=" border rounded-full overflow-hidden h-[100px] w-[100px]">
            {user && user.photoURL ? (
              <img className="h-full w-full" src={user.photoURL} alt="" />
            ) : (
              <img
                className="h-full  w-full"
                src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
                alt=""
              />
            )}
          </div>

          <div>{user && <p>Welcome, {user.email}!</p>}</div>
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Home;
