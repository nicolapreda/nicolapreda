/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com', 'yt3.ggpht.com'], // Allow YouTube thumbnails
  },
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: 'https://www.iubenda.com/privacy-policy/88326651',
        permanent: false,
      },
      {
        source: '/privacy-policy.html',
        destination: 'https://www.iubenda.com/privacy-policy/88326651',
        permanent: false,
      },
      {
        source: '/cookie-policy',
        destination: 'https://www.iubenda.com/privacy-policy/88326651/cookie-policy',
        permanent: false,
      },
      {
        source: '/cookie-policy.html',
        destination: 'https://www.iubenda.com/privacy-policy/88326651/cookie-policy',
        permanent: false,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
