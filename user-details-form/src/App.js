import "./App.css";
import Steps from "./Steps";
import Lower from "./Lower";
import Screen from "./Screen";
import { useRef, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [errors, setErrors] = useState({});
  const [manageAll, setManageAll] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    password: "",
    date: "",
    address: "",
    gender: true,
    pageCounter: 0,
  });
  const containerRef = useRef();
  const handlePages = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handleDir = (dir) => {
    let error = {};
    switch (currentPage) {
      case 0:
        if (manageAll.firstName === "" || manageAll.lastName === "") {
          manageAll.firstName === ""
            ? (error.name = "Please enter your Name")
            : (error.lastname = "Please enter your Last Name");
          setErrors(error);
          break;
        } else {
          setErrors({});

          setCurrentPage((page) => page + 1);
          currentPage === manageAll.pageCounter &&
            setManageAll((data) => ({
              ...data,
              pageCounter: manageAll.pageCounter + 1,
            }));
        }
        break;
      case 1:
        if (dir === "next") {
          if (
            manageAll.eMail === "" ||
            !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(manageAll.eMail)
          ) {
            error.email = "Please enter a valid Email address";
            setErrors(error);
            return error;
          } else {
            setErrors({});

            setCurrentPage((page) => page + 1);
            currentPage === manageAll.pageCounter &&
              setManageAll((data) => ({
                ...data,
                pageCounter: manageAll.pageCounter + 1,
              }));
          }
          break;
        } else if (dir === "prev") {
          setCurrentPage((page) => page - 1);
        }
        break;
      case 2:
        if (dir === "next") {
          const strongRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
          );
          if (
            manageAll.password === "" ||
            !strongRegex.test(manageAll.password)
          ) {
            error.password =
              "Please Select strong Password which included Capital , symbol and number.";
            setErrors(error);
            return error;
          } else {
            setErrors({});
            setCurrentPage((page) => page + 1);
            currentPage === manageAll.pageCounter &&
              setManageAll((data) => ({
                ...data,
                pageCounter: manageAll.pageCounter + 1,
              }));
          }
          break;
        } else if (dir === "prev") {
          setCurrentPage((page) => page - 1);
        }

        break;
      case 3:
        if (dir === "next") {
          if (manageAll.date === "") {
            error.date = "Please select your date of birth";
            setErrors(error);
            return error;
          } else {
            setErrors({});

            setCurrentPage((page) => page + 1);
            currentPage === manageAll.pageCounter &&
              setManageAll((data) => ({
                ...data,
                pageCounter: manageAll.pageCounter + 1,
              }));
          }
          break;
        } else if (dir === "prev") {
          setCurrentPage((page) => page - 1);
        }

        break;
      case 4:
        if (dir === "next") {
          if (manageAll.address === "") {
            error.address = "Please provide your full address";
            setErrors(error);
            return error;
          } else {
            setErrors({});

            setCurrentPage((page) => page + 1);
            currentPage === manageAll.pageCounter &&
              setManageAll((data) => ({
                ...data,
                pageCounter: manageAll.pageCounter + 1,
              }));
          }
          break;
        } else if (dir === "prev") {
          setCurrentPage((page) => page - 1);
        }

        break;
      case 5:
        if (dir === "prev") {
          setCurrentPage((page) => page - 1);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="firstSection">
        <Steps
          handlePages={handlePages}
          manageAll={manageAll}
          page={currentPage}
        />
        <Screen
          page={currentPage}
          setManageAll={setManageAll}
          containerRef={containerRef}
          manageAll={manageAll}
          errors={errors}
        />
      </div>
      <Lower page={currentPage} handleDir={handleDir} />
    </div>
  );
}

export default App;
