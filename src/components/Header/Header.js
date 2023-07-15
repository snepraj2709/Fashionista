import { useNavigate } from "react-router";
import {
  CgSearch,
  CgHeart,
  CgShoppingCart,
  CgProfile,
} from "../../Utils/icons";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row justify-between
       align-middle bg-blue-500 px-4 py-2 text-base text-white">
      <h2>Fashionista</h2>
      <div className="flex flex-row">
        <CgSearch className="w-5 h-5 m-2 left-2 color-gray-500" />
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="flex flex-row  justify-between">
        <CgProfile
          className="w-5 h-5 m-2 cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <CgHeart className="w-5 h-5 m-2 cursor-pointer" />
        <CgShoppingCart className="w-5 h-5 m-2 cursor-pointer" />
      </div>
    </div>
  );
}
