import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/software-development",
        destination:
          "/capabilities/technology-engineering/software-development",
        permanent: true,
      },
      {
        source: "/ux-design",
        destination: "/capabilities/experience-design-strategy/ux-design",
        permanent: true,
      },
      {
        source: "/agile-project-management",
        destination: "/capabilities/agile-project-management",
        permanent: true,
      },
      {
        source: "/digital-marketing",
        destination: "/capabilities/digital-marketing-branding",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-work",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
