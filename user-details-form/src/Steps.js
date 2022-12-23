function Steps({ handlePages, manageAll, page }) {
  return (
    <div className="stepBorder">
      <div className="stepButton">
        <button
          className={page === 0 ? "currentStep" : ""}
          onClick={(e) => handlePages(0)}
        >
          1
        </button>
        <span className={manageAll.pageCounter > 0 ? "validated" : ""}></span>
        <button
          className={page === 1 ? "currentStep" : ""}
          disabled={manageAll.pageCounter < 1}
          onClick={(e) => handlePages(1)}
        >
          2
        </button>
        <span className={manageAll.pageCounter > 1 ? "validated" : ""}></span>
        <button
          className={page === 2 ? "currentStep" : ""}
          disabled={manageAll.pageCounter < 2}
          onClick={(e) => handlePages(2)}
        >
          3
        </button>
        <span className={manageAll.pageCounter > 2 ? "validated" : ""}></span>
        <button
          className={page === 3 ? "currentStep" : ""}
          disabled={manageAll.pageCounter < 3}
          onClick={(e) => handlePages(3)}
        >
          4
        </button>
        <span className={manageAll.pageCounter > 3 ? "validated" : ""}></span>
        <button
          className={page === 4 ? "currentStep" : ""}
          disabled={manageAll.pageCounter < 4}
          onClick={(e) => handlePages(4)}
        >
          5
        </button>
        <span className={manageAll.pageCounter > 4 ? "validated" : ""}></span>
        <button
          className={page === 5 ? "currentStep" : ""}
          disabled={manageAll.pageCounter < 5}
          onClick={(e) => handlePages(5)}
        >
          6
        </button>
      </div>
    </div>
  );
}

export default Steps;
