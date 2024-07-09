import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#ffb6c1] text-white py-8 w-full mt-auto">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center pb-4">
          <div>
            <p className="text-2xl capitalize font-semibold header text-[#de8c99]">
              <span className="mr-1 text-accent-500 ">skin</span> hub
            </p>
          </div>
          <a
            href="#home"
            className="text-lg text-accent-500 capitalize font-medium"
          >
            Home
          </a>
        </div>
        <div className="flex flex-row justify-between items-center py-4">
          <p className="text-md text-accent-500 capitalize font-medium">
            Your one stop shop for glowy skin
          </p>
          <a className="text-lg text-accent-500 capitalize font-medium">
            Products
          </a>
        </div>
        <div className="flex flex-row justify-between items-center py-4">
          <p className="text-md text-accent-500 capitalize font-light flex items-center">
            <MdLocationPin size={25} className="mr-1" />{" "}
            <span className="capitalize">Jay Avenue, Lagos Nigeria</span>
          </p>
          <a
            href="#contacts"
            className="text-lg text-accent-500 capitalize font-medium"
          >
            Contacts
          </a>
        </div>
        <div className=" mt-6 sm:mt-8">
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <p className="text-lg text-accent-500 capitalize header">
            © <span className="mr-1">skin</span>{" "}
            <span className="text-base-50">hub</span> 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
