import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function SuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-xl animate-fadeInScale relative">

        <CheckCircle2 size={60} className="text-green-500 mx-auto mb-4" />

        <h2 className="text-xl font-semibold mb-2 text-[var(--godinov-bg)]">
          Pesan Berhasil Dikirim!
        </h2>

        <p className="text-gray-600 text-sm mb-6">
          Terima kasih! Kami akan segera menghubungi Anda.
        </p>

        <button
          onClick={onClose}
          className="
            px-6 py-2 rounded-full
            bg-[var(--godinov-cyan)]
            text-[var(--godinov-bg)]
            font-semibold
            hover:brightness-95
            transition
          "
        >
          Mengerti
        </button>
      </div>
    </div>
  );
}
