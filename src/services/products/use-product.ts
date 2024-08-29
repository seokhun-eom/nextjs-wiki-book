import useSWR from "swr";
import type { ApiContext, Product } from "@/types";

export type UseProductProps = {
  id: number;
  initial?: Product;
};

export type UseProduct = {
  product?: Product;
  isLoading: boolean;
  isError: boolean;
};

/**
 * 제품 API(개별 취득)의 커스텀훅
 * @param context API 컨텍스트
 * @param params 상품 ID와 초기 상태
 * @returns 상품과 API 호출 상태
 */
const useProduct = (
  context: ApiContext,
  { id, initial }: UseProductProps
): UseProduct => {
  const { data, error } = useSWR<Product>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`
  );

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProduct;
