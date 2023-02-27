/** @type {import('next').NextConfig} */
const nextConfig = {
//  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"store.storeimages.cdn-apple.com",
        port:"",
        pathname:"**"
      }
    ]
  }
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['cdn.fcglcdn.com'],
//   },
// }
