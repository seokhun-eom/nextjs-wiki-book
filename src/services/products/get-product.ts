import type { ApiContext, Product } from "@/types";
import { fetcher } from "@/utils";

export type GetProductParams = {
  id: number;
};

/**
 * 제품 API(개별 취득)
 * @param context API 컨텍스트
 * @param params 상품 ID
 * @returns 상품
 */
const getProduct = async (context: ApiContext, { id }: GetProductParams) => {
  return await fetcher<Product>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`,
    {
      headers: {
        Origin: "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getProduct;
