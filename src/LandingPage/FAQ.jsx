import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="px-4 py-12 p-8">
      <div className="mx-auto">
        <h3 className="text-center text-3xl font-semibold mb-4">
          <span className="text-mainRed">Frequently</span> Asked Questions
        </h3>
        <div className="shadow-md px-16 py-8 rounded-lg border border-gray-50 mt-12">
        <Question title="Why choose Media Dynox among other digital marketing advertising agencies?" defaultOpen>
          <p className="text-xl">
          Our deep understanding of the Delhi market, combined with our expertise in digital strategy and execution, makes us the best choice for businesses seeking impactful digital growth.
          </p>
        </Question>
        <Question title="How does our digital marketing ad agency stand out?">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="What benefits can you expect from our integrated digital marketing and advertising approach?">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="Why is BRIX Templates the best Webflow agency?">
          <p className="text-xl">
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
        className="2xl:py-6 py-4 w-full flex items-center justify-between gap-4"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="text-2xl font-bold  text-left bg-gradient-to-r from-black to-black bg-clip-text"
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