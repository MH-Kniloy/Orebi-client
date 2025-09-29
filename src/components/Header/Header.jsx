import { useEffect, useRef, useState } from "react";
import Container from "../Layouts/Container/Container";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import cartPopUp from "../../assets/cartpopup.png";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  const categoryRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();

  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);

  // to add an event listener on the whole webpage

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!categoryRef.current.contains(e.target)) {
        setCategoryDropdown(false);
      }
      if (!accountRef.current.contains(e.target)) {
        setAccountDropdown(false);
      }
      if (!cartRef.current.contains(e.target)) {
        setCartDropdown(false);
      }
    };
    if (categoryDropdown || accountDropdown || cartDropdown) {
      // Attach event listener
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      // Detach event listener when `categoryDropdown` changes or component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [categoryDropdown, accountDropdown, cartDropdown]);
  return (
    <>
      <section className="py-[25px] bg-whitish">
        <Container className="flex justify-between">
          <div className="flex gap-2 items-center relative">
            <div
              ref={categoryRef}
              onClick={() => setCategoryDropdown(!categoryDropdown)}
            >
              <RiBarChartHorizontalFill className="text-2xl font-bold cursor-pointer text-blackish  " />
            </div>
            <p className=" text-blackish">Shop by Category</p>
            {categoryDropdown && (
              <ul className="absolute top-[65px] bg-blackish text-grayish w-[265px] z-50">
                <li className="py-4 ps-5 border-b-[1px] border-b-[#2d2d2d] hover:text-white hover:font-bold hover:ps-8 transition-all duration-300 ease-in-out">
                  <a href="#">Accesories</a>
                </li>
                <li className="py-4 ps-5 border-b-[1px] border-b-[#2d2d2d] hover:text-white hover:font-bold hover:ps-8 transition-all duration-300 ease-in-out">
                  <a href="#">Furniture</a>
                </li>
                <li className="py-4 ps-5 border-b-[1px] border-b-[#2d2d2d] hover:text-white hover:font-bold hover:ps-8 transition-all duration-300 ease-in-out">
                  <a href="#">Electronics</a>
                </li>
                <li className="py-4 ps-5 border-b-[1px] border-b-[#2d2d2d] hover:text-white hover:font-bold hover:ps-8 transition-all duration-300 ease-in-out">
                  <a href="#">Clothes</a>
                </li>
                <li className="py-4 ps-5 border-b-[1px] border-b-[#2d2d2d] hover:text-white hover:font-bold hover:ps-8 transition-all duration-300 ease-in-out">
                  <a href="#">Bags</a>
                </li>
                <li className="py-4 ps-5 border-b-[1px] border-b-[#2d2d2d] hover:text-white hover:font-bold hover:ps-8 transition-all duration-300 ease-in-out">
                  <a href="#">Home appliances</a>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <input
              className="py-4 ps-5 pe-[60px] w-[600px] placeholder:text-light-grayish placeholder:font-normal outline-none text-xl rounded-sm text-blackish font-dmSans font-semibold"
              placeholder="Search Products"
              type="search"
            />
            <FaSearch className="text-xl absolute top-5 right-5 cursor-pointer text-blackish " />
          </div>
          <div className="flex items-center gap-10">
            <div
              ref={accountRef}
              onClick={() => setAccountDropdown(!accountDropdown)}
              className="flex relative"
            >
              <IoPersonSharp className="text-2xl text-blackish cursor-pointer " />
              <IoMdArrowDropdown className="text-2xl text-blackish cursor-pointer " />
              {accountDropdown && (
                <ul className="absolute top-[40px] right-0 bg-black text-white w-[200px] z-50 border-[1px] shadow-md border-black">
                  <li className="py-4 text-center bg-blackish font-bold hover:bg-whitish hover:text-blackish">
                    <a href="#">My Account</a>
                  </li>
                  <Link to="/dashboard">
                    <p className="py-4 text-center bg-blackish font-bold  hover:bg-whitish hover:text-blackish">
                      Dashboard
                    </p>
                  </Link>
                  <li className="py-4 text-center bg-blackish font-bold  hover:bg-whitish hover:text-blackish">
                    <a href="#">Log Out</a>
                  </li>
                </ul>
              )}
            </div>
            <div
              ref={cartRef}
              onClick={() => setCartDropdown(!cartDropdown)}
              className="relative"
            >
              <FaCartShopping className="text-2xl text-blackish cursor-pointer" />
              {cartDropdown && (
                <ul className="absolute top-[40px] right-0 w-[360px] z-50 ">
                  <li className="p-5 flex items-center justify-between bg-whitish ">
                    <div>
                      <img src={cartPopUp} alt="product-img" />
                    </div>
                    <div>
                      <p className="mb-1 font-bold text-blackish">
                        Black Smart Watch
                      </p>
                      <p className="font-bold text-blackish">$44.00</p>
                    </div>
                    <div className="cursor-pointer">
                      <IoClose className="text-xl" />
                    </div>
                  </li>
                  <li className="p-5 bg-white">
                    <div className="mb-3">
                      <p className="font-bold text-blackish">
                        <span className="text-grayish font-normal">
                          Subtotal:
                        </span>{" "}
                        $44.00
                      </p>
                    </div>
                    <div className="flex justify-between ">
                      <p className="py-4 px-9 border-[1px] border-blackish font-bold text-blackish cursor-pointer">
                        View Cart
                      </p>
                      <p className="py-4 px-9 bg-blackish font-bold text-white cursor-pointer">
                        Checkout
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
