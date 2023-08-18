import { setProductSearchText } from "../features/ProductApi";
import { useDispatch } from "react-redux";

const SearchProduct = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center ">
      <input
        className="border border-red-500 h-[40px] w-[300px] rounded-lg mb-5"
        type="text"
        placeholder="  enter the product title"
        onChange={(e) => {
          dispatch(setProductSearchText(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchProduct;
