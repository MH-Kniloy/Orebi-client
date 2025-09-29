import React from "react";
import Container from "../Layouts/Container/Container";
import logo from "../../assets/logo.png";
import Flex from "../Layouts/Flex/Flex";
const Navbar = () => {
  return (
    <nav className="py-[30px]">
      <Container>
        <section className="">
          <Flex className="items-center">
            <div className="w-[40%] ">
              <img className="w-[65px] h-4" src={logo} alt="logo" />
            </div>
            <div className="w-[60%]">
              <ul className="">
                <Flex className='gap-10'>
                  <li className="text-blackish font-bold text-[18px]">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-grayish text-[18px] hover:text-blackish font-bold">
                    <a href="#">Shop</a>
                  </li>
                  <li className="text-grayish text-[18px] hover:text-blackish font-bold">
                    <a href="#">About</a>
                  </li>
                  <li className="text-grayish text-[18px] hover:text-blackish font-bold">
                    <a href="#">Contacts</a>
                  </li>
                  <li className="text-grayish text-[18px] hover:text-blackish font-bold">
                    <a href="#">Journal</a>
                  </li>
                </Flex>
              </ul>
            </div>
          </Flex>
        </section>
      </Container>
    </nav>
  );
};

export default Navbar;
