import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const FAQ = ({question1,question2,question3,question4,answer1,answer2,answer3,answer4}) => {
  return (
    <div className=" py-6 sm:py-12 sm:p-8">
      <div className="mx-auto">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
          <span className="text-mainRed">Frequently</span> Asked Questions
        </h3>
        <div className="shadow-md sm:px-16 px-6 sm:py-8 rounded-lg border border-gray-50 mt-12">
        <Question title="Why choose Media Dynox among other digital marketing advertising agencies?" defaultOpen>
          <p className="lg:text-xl text-sm leading-6">
          Our deep understanding of the Delhi market, combined with our expertise in digital strategy and execution, makes us the best choice for businesses seeking impactful digital growth.
          </p>
        </Question>
        <Question title="How does our digital marketing ad agency stand out?">
          <p className="lg:text-xl text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="What benefits can you expect from our integrated digital marketing and advertising approach?">
          <p className="lg:text-xl text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="Why is BRIX Templates the best Webflow agency?">
          <p className="lg:text-xl text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        </div>
      </div>
    </div>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-100 py-4"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="2xl:py-6 py-2 lg:py-4 w-full flex items-start justify-between gap-4"
      >
        <motion.span
          variants={{
            open: {
              // color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              // color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="lg:text-2xl text-sm sm:text-base font-semibold  text-left "
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "red",
            },
            closed: {
              rotate: "0deg",
              color: "black",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;