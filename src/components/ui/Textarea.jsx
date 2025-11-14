import React from "react";

export default function Textarea({ label, name, value, onChange, required }) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <textarea
        name={name}
        rows="4"
        required={required}
        value={value}
        onChange={onChange}
        className="
          bg-transparent
          border-0
          border-b
          border-gray-300
          focus:border-[#00E5D4]
          focus:ring-0
          transition-all
          duration-200
          py-2
          outline-none
          placeholder:text-gray-400
          resize-none
        "
      ></textarea>
    </div>
  );
}
