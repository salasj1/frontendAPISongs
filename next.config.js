/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: 'http://localhost:3000/',
            destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
            permanent: true,
          },
          // puedes agregar más redirecciones aquí
        ];
      },
};

module.exports = nextConfig;