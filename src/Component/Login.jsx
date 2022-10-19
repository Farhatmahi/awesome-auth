import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const Login = () => {

  const {signIn} = useContext(authContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    form.reset()

    signIn(email, password)
    .then((result) => {
      const user = result.user
      console.log("logged in ", user);
      
    }).catch((err) => {
      console.error(err)
    });


  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Please Login </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="passoword"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
