import Link from "next/link";
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";
import Separator from "@/components/atoms/Separator";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import Layout from "@/components/templates/Layout";
import UserProductCardListContainer from "@/containers/UserProductCardListContainer";
import UserProfileContainer from "@/containers/UserProfileContainer";
import getAllProducts from "@/services/products/get-all-products";
import getUser from "@/services/users/get-user";
import type { ApiContext } from "@/types";

const UserPage = async ({ params }: { params: { id: string } }) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };

  const userId = Number(params.id);
  const [user, products] = await Promise.all([
    getUser(context, { id: userId }),
    getAllProducts(context, { userId }),
  ]);

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1180px">
          <Box marginBottom={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">톱</Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
          <Box>
            <Box marginBottom={1}>
              <UserProfileContainer userId={userId} user={user} />
            </Box>
            <Box marginBottom={1}>
              <Separator />
            </Box>
            <UserProductCardListContainer userId={userId} products={products} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default UserPage;
