import React from 'react'
import Container from '../Layouts/Container/Container'
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
const Additionalinfo = () => {
  return (
    <section className="border-b-[1px] border-[#f0f0f0]">
      <Container>
        <div className="pt-[64px] pb-8  flex justify-between ">
          <div className="flex gap-4 items-center">
            <p className="text-2xl text-blackish font-extrabold">2</p>
            <p className="text-grayish">Two years warranty</p>
          </div>
          <div className="flex gap-4 items-center">
            <p>
              <FaTruck className="text-2xl text-blackish" />
            </p>
            <p className="text-grayish">Free shipping</p>
          </div>
          <div className="flex gap-4 items-center">
            <p>
              <FaUndoAlt className="text-2xl text-blackish" />
            </p>
            <p className="text-grayish">Return policy in 30 days</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Additionalinfo