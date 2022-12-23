import IFrame from "./IFrame";
import SidePanel from "./SidePanel";
import data from "../data.json";

import "../styles/Page.css";
import { useEffect, useState } from "react";

export default function PageJS() {
  const [urlList, setUrlList] = useState([...data]);
  const [iframeUrl, setIframeUrl] = useState("");
  const [hideSidePanel, setHideSidePanel] = useState(false);

  console.log(urlList);

  useEffect(() => {
    window.innerWidth < 551 && iframeUrl !== "" && setHideSidePanel(true);
    window.innerWidth < 551 && iframeUrl === "" && setHideSidePanel(false);
  }, [iframeUrl]);

  useEffect(() => {
    window.innerWidth < 551 && hideSidePanel === false && setIframeUrl("");
  }, [hideSidePanel]);
  return (
    <div className="page">
      <button
        className={
          iframeUrl !== ""
            ? "sidePanelController button"
            : "sidePanelController button display"
        }
        onClick={() => setHideSidePanel((prev) => !prev)}
      >
        <span className="fa fa-arrow-left"></span>
      </button>
      <SidePanel
        urlList={urlList}
        iframeUrl={iframeUrl}
        hideSidePanel={hideSidePanel}
        setUrlList={setUrlList}
        setIframeUrl={setIframeUrl}
      />
      <IFrame iframeUrl={iframeUrl} />
    </div>
  );
}
