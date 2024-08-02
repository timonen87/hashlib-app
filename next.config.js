/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'uploadthing.com',
          'lh3.googleusercontent.com',
          'res.cloudinary.com',
          'wiki-bucket.hb.ru-msk.vkcs.cloud',
          "floyk-dev.s3.eu-central-1.amazonaws.com"
        ],
      },
      experimental: {
        staleTimes: {
          dynamic: 30,
        },
      },
      serverExternalPackages: ["@node-rs/argon2"],
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/*`,
          },
        ],
      },
      rewrites: () => {
        return [
          {
            source: "/hashtag/:tag",
            destination: "/search?q=%23:tag",
          },
        ];
      },

}

module.exports = nextConfig
