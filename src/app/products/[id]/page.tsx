import Link from "next/link";
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";
import Separator from "@/components/atoms/Separator";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import ProductCard from "@/components/organisms/ProductCard";
import UserProfile from "@/components/organisms/UserProfile";
import Layout from "@/components/templates/Layout";
import AddToCartButtonContainer from "@/containers/AddToCartButtonContainer";
import getProduct from "@/services/products/get-product";
import type { ApiContext, Category } from "@/types";

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };

  if (!params) {
    throw new Error("params is undefined");
  }

  const productId = Number(params.id);
  const product = await getProduct(context, { id: productId });

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">톱</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">검색</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={`/search/${product.category}`}>
                {categoryNameDict[product.category as Category]}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{product.title}</BreadcrumbItem>
          </Breadcrumb>
          <Flex paddingTop={2} paddingBottom={1} justifyContent="center">
            <ProductCard
              variant="detail"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Flex>
          <Separator />
          <Box paddingTop={1}>
            <Text as="h2" variant="large" marginTop={0}>
              게시자
            </Text>
            <Link href={`/users/${product.owner.id}`}>
              <UserProfile
                variant="small"
                username={product.owner.username}
                profileImageUrl={product.owner.profileImageUrl}
                numberOfProducts={100}
              />
            </Link>
          </Box>
        </Box>
        <Box padding={2} width={{ base: "100%", md: "700px" }}>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            height={{ base: "", md: "100%" }}
          >
            <Box>
              {product.description
                .split("\n")
                .map((text: string, i: number) => (
                  <Text key={i} as="p">
                    {text}
                  </Text>
                ))}
            </Box>
            <AddToCartButtonContainer product={product} />
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ProductPage;
