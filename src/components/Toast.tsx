import { useEffect } from "react";

interface ToastProps {
  message: string;
  productName: string;
  onClose: () => void;
}

function Toast({ message, productName, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose, productName]);

  return (
    <div className="fixed right-6 top-24 z-[100] flex items-center gap-3 rounded-xl border border-green-100 bg-white px-5 py-4 shadow-xl animate-in slide-in-from-right">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <div>
        <p className="text-sm font-bold text-gray-900">{message}</p>
        <p className="text-xs text-gray-500">{productName}</p>
      </div>

      <button
        onClick={onClose}
        className="ml-3 text-gray-400 hover:text-gray-700"
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
