/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // 특정 경로에 대해 헤더를 추가합니다.
        source: "/:path*", // 모든 경로에 대해 적용 (예: /about, /api/...)
        headers: [
          {
            key: "ngrok-skip-browser-warning",
            value: "true", // 헤더 값을 true로 설정
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
