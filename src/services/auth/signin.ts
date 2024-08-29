import type { ApiContext, User } from "@/types";
import { fetcher } from "@/utils";

export type SigninParams = {
  username: string;
  password: string;
};

/**
 * 인증 API(로그인)
 * @param context API 컨텍스트
 * @param params 파라미터
 * @returns 로그인 사용자
 */
const signin = async (context: ApiContext, params: SigninParams) => {
  return await fetcher<User>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
};

export default signin;
