import { motion,AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline, IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const navItems = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Product",
            url: "/product"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Contact",
            url: "/contact"
        },

    ];

    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    const handleToggleDropdown = (index) => {
        setShowDropdown(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <section className="bg-white sticky top-0 z-50">
        <div className="text-gray-800 container mx-auto">
            <div className="flex flex-wrap md:flex-nowrap justify-between mx-4 p-4 items-center ">
                {/* <img src="/assets/LOGO.png" alt="" /> */}
                <a href="/" className="text-gray-600 font-bold text-3xl flex items-center justify-center">SeaSun International</a>
                <div className="hidden md:flex items-center gap-12 md:gap-12  ">
                    {navItems.map((items, index) => {
                        return (
                            <div className="my-2" key={index}>
                                <Link className="text-gray-800 hover:underline hover:text-primary" key={index} to={items.url}>{items.name}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className="md:hidden z-20 ">
                    <button onClick={handleToggleSidebar}>
                        <GiHamburgerMenu className="text-2xl mt-2" />
                    </button>
                    <AnimatePresence mode="wait">
                    {toggle && (
                        <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{opacity:1, y: 0}}
                        exit={{opacity:0, y:-100}}
                        transition={{duration:0.3}}
                        className="absolute w-full top-12 right-0 p-4 bg-gray-600 rounded-2xl mt-4 text-xl text-center font-medium ">
                            <div className="p-2">
                                {navItems.map((items, index) => {
                                    return (
                                        <div className="my-6" key={index}>
                                            <span className="" onClick={() => handleToggleDropdown(index)}>
                                                <Link className="text-white hover:text-gray-800" key={index} to={items.url}>{items.name}</Link>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                <div className="text-green-500 hover:scale-125 rounded-full p-3 font-bold text-2xl items-center justify-center hidden md:block">
                <FaWhatsapp />
                </div>
            </div>
        </div>
        </section>
    );
}