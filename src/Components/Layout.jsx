import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderSummary from "./Products/OrderSummary";

function Layout({ value, children }) {
  // State variables for managing modals and form input
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [faildMessage, setFaildMessage] = useState(false);
  const [emptyField, setEmptyField] = useState(false);

  // Form input state
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login form data
  const [l_Email, setL_Email] = useState("");
  const [l_Password, setL_Password] = useState("");

  // Check User login or not
  const [is_Login, setIs_Login] = useState(false);

  // user Show info
  const [showUser, setShowUser] = useState(false);
  const [logedInUserEmail, setLogedInUserEmail] = useState("");

  // Menu Items List
  const menu = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  // search Query
  const [searchQuery, setSeachQuery] = useState("");

  const [cartItems, setCartItems] = useState(0);

  // Toggle Menu For Mobile
  const toggleMenu = () => setShowMenu(!showMenu);

  const handleShowLoginModal = () => setShowLoginModal(!showLoginModal);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowSignUpModal = () => setShowSignUpModal(!showSignUpModal);
  const handleCloseSignUpModal = () => setShowSignUpModal(false);

  // Function to submit Sign-Up data
  const submitSignUpData = async () => {
    try {
      // Check for empty fields
      if (
        username.trim() === "" ||
        password.trim() === "" ||
        email.trim() === ""
      ) {
        setEmptyField(true);
        return false;
      }

      // Sending POST request to sign up
      let res = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Correct spelling of Authorization
          Authorization:
            "Bearer 25db3cc85b4e586777d32a1114711f9834760faf1664380b572b5a6d7552bc91fe76889f749e58edfa995ad13af099f587d09fd060fc0ae0de2525e2e3e14e7d0c24867d51b508f89bcbd952e17474e788773fedd626e1e464c0378508933783a4af8f8981852a0bea49e12677ac34562c125b9903ca7b8df4f4b19ea3875e32",
        },
        body: JSON.stringify({ username, email, password }),
      });

      let data = await res.json();
      console.log("Success SignUp", data);

      // Reset form fields
      setEmail("");
      setPassword("");
      setUserName("");

      // Manage success and failure messages
      if (!res.ok) {
        setFaildMessage(true);
      } else {
        setSuccessMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async () => {
    if (l_Password.trim() === "" || l_Email.trim() === "") {
      setEmptyField(true);
      return false;
    }
    try {
      let res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Correct spelling of Authorization
          Authorization:
            "Bearer 25db3cc85b4e586777d32a1114711f9834760faf1664380b572b5a6d7552bc91fe76889f749e58edfa995ad13af099f587d09fd060fc0ae0de2525e2e3e14e7d0c24867d51b508f89bcbd952e17474e788773fedd626e1e464c0378508933783a4af8f8981852a0bea49e12677ac34562c125b9903ca7b8df4f4b19ea3875e32",
        },
        body: JSON.stringify({
          identifier: l_Email,
          password: l_Password,
        }),
      });

      console.log(res);
      let data = await res.json();
      // console.log(data);
      setL_Email("");
      setL_Password("");
      localStorage.setItem("User", JSON.stringify(data));
      if (data.jwt) {
        handleCloseLoginModal();
      } else {
        setFaildMessage(true);
      }
    } catch (error) {}
  };

  // user Show data function

  const showUserInfo = () => {
    setShowUser(!showUser);
    let getUser = localStorage.getItem("User");
    console.log(getUser);
    let userIfo = getUser ? JSON.parse(getUser) : {};

    if (userIfo.jwt) {
      setIs_Login(true);
      setLogedInUserEmail(userIfo.user);
    } else {
      setIs_Login(false);
    }
  };

  // Seach FUnction

  const handleOnSearch = () => {
    if (searchQuery.trim() === "" || searchQuery.length <= 3) {
      console.log("Search again");
    } else {
      console.log("Pass");
    }
  };

  // logic for cartSection

  const cartSection = {
    addValue: () => {
      setCartItems(cartItems + 1);
    },
    removeValue: () => {
      setCartItems(cartItems - 1);
    },
  };

  // return Data
  return (
    <div className="w-full">
      <header className="bg-indigo-600 sticky top-0 right-0 text-white">
        <nav className="flex md:px-16 px-8 items-center justify-between py-3">
          <div>
            <label>CompanyName</label>
          </div>
          <div className="md:flex hidden md:gap-5 items-center">
            {menu.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            ))}
            <Link to={"/products/ordersummary"}>
              <button className="">
                <i className="ri-shopping-cart-2-fill text-2xl"></i>
                <sup className="text-orange-500 text-lg">{value}</sup>
              </button>
            </Link>

            {/* Seach Button */}
            <div className="w-72 bg-white flex rounded-md">
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSeachQuery(e.target.value);
                }}
                type="text"
                placeholder="search..."
                className="w-full px-3 rounded-l-md py-1 outline-none text-slate-700"
              />
              <button
                className="text-xl bg-orange-600 px-3 py-1 rounded-r-md  "
                onClick={() => {
                  handleOnSearch();
                }}
              >
                <i className="ri-search-line "></i>
              </button>
            </div>
            {/* login User Info */}

            <button className="rounded-full relative" onClick={showUserInfo}>
              <i className="ri-user-fill"></i>
              {showUser && (
                <div className="absolute bg-white text-slate-600 top-10 right-0 shadow-md p-4  rounded-md shadow-black flex flex-col gap-3">
                  <div className="text-lg">
                    <p>{logedInUserEmail.username}</p>
                    <p>{logedInUserEmail.email}</p>
                  </div>

                  {!is_Login ? (
                    <button
                      className="bg-indigo-600  px-4 rounded-md text-white font-semibold w-full py-2"
                      onClick={handleShowLoginModal}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="bg-indigo-600  rounded-md text-white font-semibold w-full py-2"
                      onClick={() => {
                        localStorage.removeItem("User");
                        setLogedInUserEmail("");
                      }}
                    >
                      Logout
                    </button>
                  )}
                </div>
              )}
            </button>
          </div>

          <button onClick={toggleMenu} className="md:hidden block btn btn-info">
            Menu
          </button>
        </nav>
      </header>

      {showMenu && (
        <div className="inset-0 py-4 w-full top-0 bg-indigo-300 md:hidden">
          {menu.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="bg-white w-full block text-lg py-1 px-3 hover:bg-slate-200 mb-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <section>{children}</section>

      {/* Login Modal with Form */}
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <div className="bg-white rounded-lg ">
          <div className="bg-indigo-600 px-4 rounded-t-md text-white flex items-center justify-between">
            <h3 className="text-slate-100 text-3xl py-2 font-semibold font-serif">
              Login
            </h3>
            <button
              onClick={handleCloseLoginModal}
              className="text-rose-400 text-3xl"
            >
              <i className="ri-close-circle-fill"></i>
            </button>
          </div>
          <form className="px-8 py-4 flex gap-3 flex-col">
            <div>
              <input
                value={l_Email}
                name="l_Email"
                onChange={(e) => {
                  setL_Email(e.target.value);
                }}
                type="email"
                className="border border-slate-400 w-full py-1 px-3 rounded-sm"
                placeholder="email or username"
              />
            </div>
            <div>
              <input
                value={l_Password}
                name="l_Password"
                onChange={(e) => {
                  setL_Password(e.target.value);
                }}
                type="password" // Corrected 'passsword' to 'password'
                className="border border-slate-400 w-full py-1 px-3 rounded-sm"
                placeholder="password"
              />
            </div>
            <Button
              onClick={() => {
                loginUser();
              }}
            >
              Login
            </Button>
          </form>
          <p className="px-8 pb-2 mb-3">
            Have no account?{" "}
            <button
              className="text-indigo-500 font-semibold"
              onClick={() => {
                handleShowSignUpModal();
                handleCloseLoginModal();
              }}
            >
              Sign Up
            </button>
          </p>
          {faildMessage && (
            <span className="block bg-rose-100 text-rose-500 mb-4 px-8">
              Invalid Username or Password
            </span>
          )}
        </div>
      </Modal>

      {/* Sign-Up Modal */}
      <Modal show={showSignUpModal} onHide={handleCloseSignUpModal}>
        <div className="bg-white rounded-lg ">
          <div className="bg-indigo-600 px-4 rounded-t-md text-white flex items-center justify-between">
            <h3 className="text-slate-100 text-3xl py-2 font-semibold font-serif">
              Sign Up
            </h3>
            <button
              onClick={handleCloseSignUpModal}
              className="text-rose-400 text-3xl"
            >
              <i className="ri-close-circle-fill"></i>
            </button>
          </div>
          <form
            className="px-8 py-4 flex gap-3 flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              submitSignUpData();
            }}
          >
            <div>
              <input
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setEmptyField(false);
                }}
                type="text"
                className="border border-slate-400 w-full py-1 px-3 rounded-sm"
                placeholder="username"
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmptyField(false);
                }}
                type="email"
                className="border border-slate-400 w-full py-1 px-3 rounded-sm"
                placeholder="email"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setEmptyField(false);
                }}
                type="password" // Corrected 'passsword' to 'password'
                className="border border-slate-400 w-full py-1 px-3 rounded-sm"
                placeholder="password"
              />
            </div>
            <Button type="submit">Sign Up</Button> {/* Added type="submit" */}
          </form>
          <p className="px-8 pb-2 mb-3">
            Already have an account?
            <button
              className="text-indigo-500 font-semibold"
              onClick={() => {
                handleCloseSignUpModal();
                handleShowLoginModal();
              }}
            >
              Sign In
            </button>
          </p>
        </div>
        <div className="">
          {successMessage && (
            <span className="block bg-green-100 text-green-500 mb-4 px-8">
              Sign Up Successfully
            </span>
          )}
          {faildMessage && (
            <span className="block bg-rose-100 text-rose-500 mb-4 px-8">
              Sign Up Failed
            </span>
          )}
          {emptyField && ( // Corrected check for empty fields
            <span className="block bg-rose-100 text-rose-500 mb-4 px-8">
              All fields are required
            </span>
          )}
        </div>
      </Modal>

      {/* order summaRY  */}
      {/* <OrderSummary value={cartItems} cartButton={cartSection}></OrderSummary> */}
    </div>
  );
}

export default Layout;
