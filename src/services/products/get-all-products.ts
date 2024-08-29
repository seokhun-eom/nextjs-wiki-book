import type { ApiContext, Category, Condition, Product } from "@/types";
import { fetcher } from "@/utils";

export type GetAllProductsParams = {
  category?: Category;
  conditions?: Condition[];
  userId?: number;
  sort?: keyof Omit<Product, "owner">;
  order?: "asc" | "desc";
  limit?: number;
  page?: number;
};

/**
 * 제품 API(목록 취득)
 * @param context API 컨텍스트
 * @param params 검색 조건
 * @returns 상품 목록
 */
const getAllProducts = async (
  context: ApiContext,
  {
    category,
    conditions,
    userId,
    page,
    limit,
    sort = "id",
    order = "desc",
  }: GetAllProductsParams = {}
) => {
  const path = `${context.apiRootUrl.replace(/\/$/g, "")}/products`;
  const params = new URLSearchParams();

  if (category) params.append("category", category);
  if (conditions)
    conditions.forEach((condition) => params.append("condition", condition));
  if (userId) params.append("owner.id", `${userId}`);
  if (page) params.append("_page", `${page}`);
  if (limit) params.append("_limit", `${limit}`);
  if (sort) params.append("_sort", sort);
  if (order) params.append("_order", order);
  const query = params.toString();

  return await fetcher<Product[]>(
    query.length > 0 ? `${path}?${query}` : path,
    {
      headers: {
        Origin: "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "include",
      },
    }
  );
};

export default getAllProducts;
