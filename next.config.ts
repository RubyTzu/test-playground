import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withImages = require("next-images");
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
});

export default nextConfig;
