/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    ...(isProduction && {
      reactRemoveProperties: {
        properties: ["^data-testid$"],
      },
    }),
  },
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ];
  },
};

export default nextConfig;
