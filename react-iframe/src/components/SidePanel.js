import { Fragment, useEffect, useState } from "react";
import "../styles/SidePanel.css";

export default function SidePanel({
  setUrlList,
  urlList,
  setIframeUrl,
  iframeUrl,
  hideSidePanel,
}) {
  const [urlData, setUrlData] = useState({ url: "", title: "" });
  const [editTitle, setEditTitle] = useState(-1);
  const [urlOptions, setUrlOptions] = useState(-1);
  useEffect(() => {
    setUrlData({ url: "", title: "" });
  }, [editTitle]);
  return (
    <div
      className={
        hideSidePanel
          ? "display sidePanel"
          : iframeUrl === ""
          ? "sidePanel"
          : "sidePanel phoneView"
      }
    >
      <form className="inputForm" onSubmit={(e) => e.preventDefault()}>
        <input
          className="urlInput"
          autoFocus
          type="text"
          value={urlData.url}
          onChange={(e) => setUrlData({ url: e.target.value, title: "" })}
        />
        <button
          className={editTitle > -1 ? "hidden" : "addUrl button"}
          type="submit"
          onClick={() =>
            urlData.url !== "" &&
            (setUrlList((prev) => [...prev, urlData]),
            setUrlData({ url: "", title: "" }))
          }
        >
          <span className="fa fa-add"></span>
        </button>
      </form>
      <div className="urlList">
        {urlList?.map((data, i) => (
          <Fragment key={i}>
            {i === editTitle ? (
              <form
                className="inputForm title"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="urlInput title"
                  autoFocus
                  type="text"
                  value={urlData.title}
                  onChange={(e) =>
                    setUrlData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
                <button
                  className="addTitle button"
                  type="submit"
                  onClick={() =>
                    urlData.title !== "" &&
                    setUrlList(
                      (prev) =>
                        prev.map((urldata, index) => {
                          if (index === i)
                            return { ...urldata, title: urlData.title };
                          return urldata;
                        }),
                      setEditTitle(-1)
                    )
                  }
                >
                  <span className="fa fa-add"></span>
                </button>
              </form>
            ) : (
              <div
                className={`urlContainer ${
                  iframeUrl.includes(data.url) && "activeUrl"
                }`}
              >
                <div
                  className="setIframe"
                  onClick={() => {
                    iframeUrl === data.url
                      ? setIframeUrl("")
                      : setIframeUrl(data.url);
                  }}
                >
                  <p className="url">
                    {data.title === "" ? data.url : data.title}
                  </p>
                </div>
                <div
                  className="urlOptions button"
                  onClick={() => {
                    urlOptions === i ? setUrlOptions(-1) : setUrlOptions(i);
                  }}
                >
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            )}
            <div className={urlOptions === i ? "options active" : "options"}>
              <button
                className="urlTitle button"
                onClick={() => {
                  setEditTitle(i);
                  setUrlOptions(-1);
                }}
              >
                {data.title === "" ? "Add Title" : "Edit Title"}
              </button>
              <button
                className="deleteUrl button"
                onClick={() => {
                  setUrlList((prev) =>
                    prev.filter((urls, index) => i !== index)
                  );
                  setUrlOptions(-1);
                }}
              >
                Delete Url
              </button>
              <button
                className="openPdf button"
                onClick={() => {
                  setIframeUrl(`https://sci-hub.se/${data.url}`);
                  setUrlOptions(-1);
                }}
              >
                Open as PDF
              </button>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
