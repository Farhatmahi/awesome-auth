import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/UserContext";


const Register = () => {

  const {createUser, signInWithGoogle} = useContext(authContext)
  // console.log("Create", createUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    form.reset()

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log("registered user : ", user)
    }).catch((err) => {
      console.error(err)
    });


  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      const user = result.user
      console.log(user)
    }).catch((err) => {
      console.error(err)
    });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold"> </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                type="password"
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
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Sign in with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
