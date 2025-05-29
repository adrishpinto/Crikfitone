import Image from "next/image";

const Navbar = () => {
  
  const NavItem = (props) => {
    return (
      <li className="cta">
        <button className="text-gray-200 cursor-pointer hover-underline-animation">
          {props.name}
        </button>
      </li>
    );
  };

  return (
    <div>
      <div className=" fixed top-0 w-full z-50 bg-black/60 h-20 ">
          {/* <img
            src="/images/batsman.png"
            alt="No photo"
            className=" w-full h-full object-cover brightness-30"
          /> */}
        <div className="absolute top-0">
          <h1 className="mt-5 ml-4 text-5xl text-gray-200 cursor-pointer font-drunk tracking-wide" style={{ fontFamily:"DrukWideBold" }}>
            Crikfitone
          </h1>
        </div>

        <div className="absolute top-6 right-15 text-2xl">
          <nav className="">
            <ul className="flex space-x-7 tracking-tight font-normal text-2xl">
              <NavItem name="Home" />
              <NavItem name="About" />
              <NavItem name="Gallery" />
              <NavItem name="Events" />
              <NavItem name="Contact Us" />
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
