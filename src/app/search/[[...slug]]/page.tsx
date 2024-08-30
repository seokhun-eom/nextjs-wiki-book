"use client";

import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import styled from "styled-components";
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import FilterGroup from "@/components/molecules/FilterGroup";
import Layout from "@/components/templates/Layout";
import ProductCardListContainer from "@/containers/ProductCardListContainer";
import type { Category, Condition } from "@/types";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

const SearchPage = ({ params }: { params: { slug?: string[] } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathParams = useParams();

  const slug = params.slug ?? [];

  const conditions = (() => {
    if (Array.isArray(pathParams.condition)) {
      return pathParams.condition as Condition[];
    } else if (pathParams.condition) {
      return [pathParams.condition as Condition];
    } else {
      return [];
    }
  })();

  const handleChange = (selected: string[]) => {
    router.push(`${pathname}?condition=${selected.join(",")}`);
  };

  return (
    <Layout>
      <Box
        paddingLeft={{
          base: 2,
          md: 3,
        }}
        paddingRight={{
          base: 2,
          md: 3,
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Box marginBottom={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">톱</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">검색</Link>
            </BreadcrumbItem>
            {slug.slice(0, slug.length - 1).map((category, i) => (
              <BreadcrumbItem key={i}>
                <Link href={`/search/${slug.slice(0, i + 1).join("/")}`}>
                  {categoryNameDict[category] ?? "Unknown"}
                </Link>
              </BreadcrumbItem>
            ))}
            {slug.length == 0 && <BreadcrumbItem>모두</BreadcrumbItem>}
            {slug.length > 0 && (
              <BreadcrumbItem>
                {categoryNameDict[slug[slug.length - 1]] ?? "Unknown"}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box as="aside" minWidth="200px" marginBottom={{ base: 2, md: 0 }}>
              <FilterGroup
                title="상품 상태"
                items={[
                  { label: "새 상품", name: "new" },
                  { label: "중고 상품", name: "used" },
                ]}
                value={conditions}
                onChange={handleChange}
              />
              <Box paddingTop={1}>
                <Text as="h2" fontWeight="bold" variant="mediumLarge">
                  카테고리
                </Text>
                <Box>
                  <Link href="/search/" passHref>
                    <Anchor>모두</Anchor>
                  </Link>
                </Box>
                {Object.keys(categoryNameDict).map(
                  (category: string, i: number) => (
                    <Box key={i} marginTop={1}>
                      <Link href={`/search/${category}`} passHref>
                        <Anchor>
                          {categoryNameDict[category as Category]}
                        </Anchor>
                      </Link>
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Box>
              <Text
                as="h2"
                display={{ base: "block", md: "none" }}
                fontWeight="bold"
                variant="mediumLarge"
              >
                상품 목록
              </Text>
              <ProductCardListContainer
                category={slug.length > 0 ? slug[slug.length - 1] : undefined}
                conditions={conditions}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SearchPage;
