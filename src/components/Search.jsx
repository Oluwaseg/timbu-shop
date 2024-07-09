import { MdSearch } from "react-icons/md";

const Search = ({ size = 30, className = "text-gray-500 mr-1 cursor-pointer" }) => {
  return (
    <div className={className}>
      <MdSearch size={size} />
    </div>
  );
};

export default Search;
