"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";

export const useAuthGuard = (): void => {
  const router = useRouter();
  const pathname = usePathname();
  const { authUser, isLoading } = useAuthContext();

  useEffect(() => {
    if (!authUser && !isLoading) {
      const currentPath = pathname;

      router.push(`/signin?redirect_to=${currentPath}`);
    }
  }, [router, authUser, isLoading, pathname]);
};
