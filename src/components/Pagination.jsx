import React from "react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-6 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md bg-gray-100 disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 border rounded-md ${currentPage === i+1 ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
        >
          {i+1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-md bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}