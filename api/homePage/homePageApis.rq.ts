import { useQuery } from "react-query";
import { getData } from "./homePageApis";

export const useGetData = () => {
  const { data, isLoading } = useQuery(["getData"], () => getData());
  return { data: data as any, isLoading };
};
