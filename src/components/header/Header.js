import logo from "../../imgage/logo.svg";
import user_icon from "../../imgage/userIcon.jpg";
import "./Header.scss";

import { FaRegNewspaper, FaBars, FaVoteYea } from "react-icons/fa";
import { IoStorefrontOutline, IoLogOutOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

import { useContext, useEffect } from "react";

// import BtnScroll from "./BtnScroll";
import { nav } from "../../data/data";

const HeaderComponent = () => {
  //

  return (
    <header className="header">
      <div className="container">
        <div className="header_left">
          <nav>
            <ul>
              {nav.map((val) => {
                return (
                  <li key={val.id}>
                    <span>{val.icon}</span>
                    <a
                      className="nav_link"
                      // to={
                      //   val.text === "order online"
                      //     ? "/category/best-foods"
                      //     : "/"
                      // }
                    >
                      {val.text}
                    </a>
                  </li>
                );
              })}

              {/* <li>
                <span>
                  <AiOutlineHome />
                </span>
                <a>pages</a>
              </li>
              <li>
                <span>
                  <GiKnifeFork />
                </span>{" "}
                <a>Order online</a>
              </li>
              <li>
                <span>
                  <FaRegNewspaper />
                </span>
                <a>news</a>
              </li>
              <li>
                <span>
                  <IoStorefrontOutline />
                </span>{" "}
                <a>Store locations</a>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <div className="account">
            {
              //      isSignedIn ? (
              // <Link to="/login" className="account">
              //   <div className="account_icon">
              //     <img className="img_account" src={user_icon} />
              //   </div>
              //   <span className="account_name">sign in</span>
              // </Link>
              //   ):
              //   (
              //     <div to="login" className='account'>
              //         <div className='account_icon'>
              //          <img className='img_account' src={user_icon} />
              //         </div>
              //         <span className='account_name' >sign inok</span>
              //    </div>
              //   )
            }
            {/* {isSignedIn ? (
              <div className="account_option">
                <ul>
                  <li>
                    <span>
                      <MdAccountBox />
                    </span>
                    <a>my account</a>
                  </li>
                  <li onClick={() => handleOpenWishList()}>
                    <span>
                      <FaVoteYea />
                    </span>
                    <a>my wishlist</a>
                  </li>
                  <li onClick={() => logout()}>
                    <span>
                      <IoLogOutOutline />
                    </span>
                    <a>log out</a>
                  </li>
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
