import { MdFavorite } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
const Favourite = ({ size = 24, className="cursor-pointer" }) => {
  return (
    <div className={className}>
      <BsHeart size={size} />
    </div>
  );
};

export default Favourite;
