import React from "react";

export default function Input({ label, name, type = "text", value, onChange, required }) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        required={required}
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
        "
      />
    </div>
  );
}
