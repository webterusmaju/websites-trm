"use client";

import { useState, useCallback } from "react";

export default function FloatingChatButtons() {
  const [showWeChat, setShowWeChat] = useState(false);
  const [copied, setCopied] = useState(false);

  // ✅ Ganti dengan WeChat ID kau
  const WECHAT_ID = "";
  // ✅ Optional: cuba buka scanner (mobile only)
  const WECHAT_SCHEME = "weixin://dl/scan";

  const isMobile = () => /iphone|ipad|ipod|android/i.test(navigator.userAgent);

  const handleWeChatClick = useCallback(() => {
    if (isMobile()) {
      window.location.href = WECHAT_SCHEME;
      setTimeout(() => setShowWeChat(true), 1200);
    } else {
      setShowWeChat(true);
    }
  }, []);

  const copyWeChatId = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = WECHAT_ID;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <>
      {/* ✅ Floating Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/601115388374"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg ring-1 ring-white/40 transition duration-300"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            className="w-[28px] h-[28px] [shape-rendering:geometricPrecision]"
          >
            <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0a11.84 11.84 0 0 0-10 18.25L0 24l5.88-1.94A11.84 11.84 0 0 0 12 24a11.92 11.92 0 0 0 8.45-3.48A11.83 11.83 0 0 0 24 12a11.85 11.85 0 0 0-3.48-8.52zM12 22a9.88 9.88 0 0 1-5.17-1.43l-.37-.22-3.49 1.15 1.14-3.4-.24-.36A9.89 9.89 0 0 1 2 12a10 10 0 1 1 10 10zm5.23-7.77c-.28-.14-1.64-.81-1.89-.9s-.44-.14-.63.14-.72.9-.88 1.09-.33.21-.61.07a8.15 8.15 0 0 1-2.4-1.48 9 9 0 0 1-1.65-2.05c-.17-.29 0-.44.13-.58s.29-.33.43-.5a1.93 1.93 0 0 0 .29-.44c.1-.15.1-.29 0-.43s-.63-1.5-.86-2.06-.45-.47-.63-.48-.33-.02-.52-.02a1 1 0 0 0-.7.33c-.24.24-.94.93-.94 2.27s.97 2.64 1.1 2.83 1.91 3 4.63 4.22c.65.28 1.15.45 1.54.58.65.21 1.24.18 1.7.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.33-.07-.11-.26-.18-.54-.32z" />
          </svg>
        </a>

        {/* WeChat */}
        <button
          onClick={handleWeChatClick}
          className="bg-[#07C160] hover:bg-[#05a14d] text-white p-4 rounded-full shadow-lg ring-1 ring-white/40 transition duration-300"
          aria-label="Chat on WeChat"
          title="Chat on WeChat"
        >
          {/* ✅ WeChat icon — crisp, properly centered */}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              width="28"
              height="28"
              fill="white"
            >
              <path d="M512 64C264.6 64 64 242.5 64 463.8c0 125.6 68.1 237.5 175.8 310.9-6.4 48.7-31.2 124.2-31.6 125.6 0 0-1.4 4.2 2.3 5.8 3.3 1.4 6 .3 6 .3 1.2-.4 79.5-28.2 126.4-47.2 53.5 19.7 111.3 30.2 172.1 30.2 247.4 0 448-178.5 448-399.8S759.4 64 512 64zm-164 321.6c-19 0-34.4-15.4-34.4-34.4s15.4-34.4 34.4-34.4 34.4 15.4 34.4 34.4-15.4 34.4-34.4 34.4zm184 0c-19 0-34.4-15.4-34.4-34.4s15.4-34.4 34.4-34.4 34.4 15.4 34.4 34.4-15.4 34.4-34.4 34.4z" />
            </svg>
        </button>
      </div>

      {/* ✅ WeChat Modal */}
   {showWeChat && (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
    onClick={() => setShowWeChat(false)}
  >
    <div
      className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Add me on WeChat
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Scan the QR code below <span className="font-medium">(easiest way)</span>{" "}
        or search for my WeChat ID:
        <span className="ml-1 font-mono px-1.5 py-0.5 rounded bg-gray-100">
          {WECHAT_ID}
        </span>
      </p>

            <div className="w-full flex items-center justify-center mb-4">
              {/* Letak /wechat-qr.png dalam /public */}
              <img
                src="/wechat-qr.png"
                alt="WeChat QR Code"
                className="w-48 h-48 rounded-md border"
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={copyWeChatId}
                className="flex-1 rounded-lg px-3 py-2 bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                {copied ? "Copied!" : "Copy WeChat ID"}
              </button>
        <button
  onClick={() => setShowWeChat(false)}
  className="rounded-lg px-3 py-2 border border-gray-300 text-black hover:bg-gray-100 transition"
>
  Close
</button>

            </div>

           <div className="text-xs text-gray-500 space-y-1">
  <p>Tip: On mobile, this button will try to open WeChat. If it doesn’t work, use the QR code or ID above.</p>
  <p>WeChat does not support starting a chat using a phone number from the web like WhatsApp does.</p>
</div>

          </div>
        </div>
      )}
    </>
  );
}
