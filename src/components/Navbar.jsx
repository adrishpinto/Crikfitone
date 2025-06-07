import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [1, 0.85]);

  const NavItem = (props) => (
    <li className="cta">
      <button className="text-gray-200 cursor-pointer hover-underline-animation">
        {props.name}
      </button>
    </li>
  );

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 w-full z-50 bg-black h-20"
    >
      {/* Optional background image */}
      {/* <Image
        src="/images/batsman.png"
        alt="No photo"
        layout="fill"
        className="object-cover brightness-30"
      /> */}

      <div className="absolute top-0">
        <h1 className="mt-5 ml-4 text-5xl text-gray-200 cursor-pointer tracking-wide font-drunk">
          C1
        </h1>
      </div>

      <div className="absolute top-6 right-15 text-2xl">
        <nav>
          <ul className="flex space-x-7 tracking-tight font-normal text-2xl">
            <NavItem name="Home" />
            <NavItem name="About" />
            <NavItem name="Gallery" />
            <NavItem name="Events" />
            <NavItem name="Contact Us" />
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
