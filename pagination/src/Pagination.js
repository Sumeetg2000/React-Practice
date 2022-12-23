import { Fragment } from "react";
import "./pagination.css";

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pages = [
    currentPage,
    currentPage + 1,
    currentPage + 2,
    totalPages / 2,
    totalPages,
  ];
  
  return (
    <div className="paginationContainer">
      <button
        className={currentPage === 1 ? "disabled btn" : "btn"}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        prev
      </button>
      {pages.map((pageNumber, i) => (
        <Fragment key={pageNumber}>
          {currentPage > 1 && i === 0 && "..."}
          {i === 3 && "..."}
          <button
            className={`btn ${currentPage === pageNumber ? "currentPage" : ""}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
          {i === 3 && "..."}
        </Fragment>
      ))}
      <button
        className={"btn"}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
}
