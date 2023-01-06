import { useGetData } from "../../api/homePage/homePageApis.rq";
import ProductCard from "../Shared/ProductCard";

const ProductsListPage = () => {
  const { data } = useGetData();
  return (
    <div className="flex flex-wrap items-center h-full main-container">
      {data?.map((item) => (
        <ProductCard data={item} />
      ))}
    </div>
  );
};
export default ProductsListPage;
