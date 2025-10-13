"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-white text-black overflow-hidden">
      <div className="h-full p-6">
        {/* 상단: 프로필 섹션 */}
        <div className="h-1/3 flex items-center justify-center mb-6">
          <div className="flex items-center space-x-8">
            {/* 프로필 사진 */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/profile.jpg"
                  alt="프로필 사진"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* 프로필 정보 */}
            <div className="space-y-3">
              <div className="inline-block">
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  👋 개발자 길잡이 입니다.
                </span>
              </div>
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Time does wait for what I want to do.
                </span>
              </h1>
              <p className="text-base text-gray-600">
                당신이 원하는 웹 서비스를 신속하고 정확하게 만들어 드리겠습니다.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => window.open("https://github.com", "_blank")}
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                >
                  프로젝트 보기
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "mailto:jobbi7000@gmail.com?subject=포트폴리오 문의",
                      "_blank"
                    )
                  }
                  className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-sm"
                >
                  연락하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 그리드 섹션 */}
        <div className="h-2/3 grid grid-cols-3 gap-6">
          {/* 기술 스택 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              🛠️ 기술 스택
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-sm mb-2">프론트엔드</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    TypeScript
                  </span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-sm mb-2">백엔드</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Node.js
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Express
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-sm mb-2">도구</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    Git
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    Docker
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    AWS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 프로젝트 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              🚀 주요 프로젝트
            </h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-sm mb-2">E-커머스 플랫폼</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Next.js와 MongoDB를 활용한 풀스택 쇼핑몰
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    MongoDB
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    Stripe
                  </span>
                </div>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
                <h4 className="font-bold text-sm mb-2">실시간 채팅 앱</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Socket.io를 활용한 실시간 메신저
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    React
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                    Socket.io
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                    Redis
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 연락처 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              📞 연락처
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="font-semibold text-sm">이메일</div>
                    <div className="text-xs text-gray-600">
                      jobbi7000@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="font-semibold text-sm">전화</div>
                    <div className="text-xs text-gray-600">010-8188-7000</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="font-semibold text-sm">위치</div>
                    <div className="text-xs text-gray-600">서울, 대한민국</div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="text-sm font-semibold mb-3">소셜 미디어</div>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
