import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="wrap md:w-[60%] w-full   mx-auto flex flex-col items-center">
        <Link className="block h-[150px] " to="/">
          <img
            src="./assets/logo.ico"
            alt="image "
            className="h-full w-full object-cover "
          />
        </Link>

        <FooterForm />

        {/* link */}
        <ul className="md:ml-auto flex justify-center list-none text-white  mx-auto my-5 space-x-3 text-xs font-bold">
          <li>
            <Link to={"/"}>Twitter</Link>
          </li>
          <li>
            <Link to={"/"}>Instagram</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>

        {/* copyright */}
        <span className="text-xs text-white font-bold mt-5">
          @God'sChamber2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
