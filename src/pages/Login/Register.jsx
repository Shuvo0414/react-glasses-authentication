import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { creatUser, userUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    //get input field value

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name, email, photo, password);

    // password validation

    if (password.length < 6) {
      toast.error("Password must be at least 6 character's");
      return;
    }

    // creat a user
    creatUser(email, password)
      .then(() => {
        userUpdateProfile(name, photo).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch(() => {
        toast.error("Invailed User");
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Register</button>
              </div>
              <label className="label">
                Have an account?
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
