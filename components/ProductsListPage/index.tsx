import { useGetData } from "../../api/homePage/homePageApis.rq";
import ProductCard from "../Shared/ProductCard";

const ProductsListPage = () => {
  const { data } = useGetData();
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {data?.map((item) => (
        <ProductCard data={item} />
      ))}
    </div>
  );
};
export default ProductsListPage;
