"use client";

import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import GlobalSpinner from "@/components/organisms/GlobalSpinner";
import { AuthContextProvider } from "@/contexts/AuthContext";
import GlobalSpinnerContextProvider from "@/contexts/GlobalSpinnerContext";
import { ShoppingCartContextProvider } from "@/contexts/ShoppingCartContext";
import { theme } from "@/themes";
import { ApiContext } from "@/types";
import { fetcher } from "@/utils";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          fetcher,
        }}
      >
        <GlobalSpinnerContextProvider>
          <ShoppingCartContextProvider>
            <AuthContextProvider context={context}>
              <GlobalSpinner />
              {children}
            </AuthContextProvider>
          </ShoppingCartContextProvider>
        </GlobalSpinnerContextProvider>
      </SWRConfig>
    </ThemeProvider>
  );
};

export default Provider;
