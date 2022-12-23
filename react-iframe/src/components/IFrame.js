import Iframe from "react-iframe";
import "../styles/IFrame.css";

export default function IFrame({ iframeUrl }) {
  return (
    <div className={iframeUrl !== "" ? "iFrame phoneview" : "iFrame "}>
      <Iframe className="frame" src={iframeUrl} title="urls"></Iframe>
    </div>
  );
}
