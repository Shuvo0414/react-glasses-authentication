import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);
  // console.log(googleLogin);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (social) => {
    // if i need more social media handle then control both  of them,using this 1 handler . so i take a parameter and call it

    social()
      .then(() => {
        toast.success("User login successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Invailed User");
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around items-center">
        <button
          onClick={() => handleLogin(googleLogin)}
          className="btn btn-sm btn-neutral"
        >
          Google
        </button>
        <button
          onClick={() => handleLogin(gitHubLogin)}
          className="btn btn-sm btn-neutral"
        >
          GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
