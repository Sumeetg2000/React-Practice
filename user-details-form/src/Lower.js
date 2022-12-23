import React from "react";

function Lower({ page, handleDir }) {
  return (
    <div className="lower">
      <div className="pt-5 d-flex justify-content-end inBoxButton">
        {page === 0 ? (
          ""
        ) : (
          <button
            className="firstNext testing"
            onClick={() => {
              handleDir("prev");
            }}
          >
            Previous
          </button>
        )}
        {page === 5 ? (
          <button className="firstNext ms-5 me-3">Submit</button>
        ) : (
          <button
            className="firstNext ms-5 me-3"
            onClick={() => {
              handleDir("next");
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Lower;
