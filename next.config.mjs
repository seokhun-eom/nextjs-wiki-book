/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.compiler = {
    styledComponents: true,
    reactRemoveProperties: {
      properties: [`^data-testid$`],
    },
  };
}

export default nextConfig;
