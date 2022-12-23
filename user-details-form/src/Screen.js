import React, { useEffect} from "react";
import Fifth from "./pages/Fifth";
import First from "./pages/First";
import Fourth from "./pages/Fourth";
import Second from "./pages/Second";
import Sixth from "./pages/Sixth";
import Third from "./pages/Third";

function Screen({ page, setManageAll, manageAll, containerRef, errors }) {
  const screens = [First, Second, Third, Fourth, Fifth, Sixth];

  useEffect(() => {
    const anim = -(page * 100);
    containerRef.current.style.transform = `translateY(${anim}vh)`;
  }, [page, containerRef]);
  return (
    <div className="ContainerClass">
      <div className="slider" ref={containerRef}>
        {screens.map((Sceen, i) => (
          <Sceen key={i} manageAll={manageAll} setManageAll={setManageAll} errors={errors}/>
        ))}
      </div>
    </div>
  );
}

export default Screen;
