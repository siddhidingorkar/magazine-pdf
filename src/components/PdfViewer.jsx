import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function PdfViewer() {
  // const [loading, setLoading] = useState(true);
  const { filename } = useParams();

  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    //   setTimeout(()=>{

    //       setLoading(false);
    //   },1000)
  };
  return (
    <>
      {/* {loading && <Loading loading = {loading} />} */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HTMLFlipBook width={500} height={700} showCover={true}>
          {[...Array(numPages).keys()].map((n) => (
            <Pages number={`${n + 1}`}>
              <Document
                file={decodeURIComponent(filename)}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  pageNumber={n + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={500}
                  className="border-3 border-black"
                />
              </Document>
            </Pages>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
}

// function PdfViewer() {
//   const { filename } = useParams();

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Reader's Digest</h1>
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//         <div
//           style={{
//             border: "1px solid rgba(0, 0, 0, 0.3)",
//             height: "750px",
//           }}
//         >
//           <Viewer fileUrl={decodeURIComponent(filename)} />
//         </div>
//       </Worker>
//     </div>
//   );
// }

export default PdfViewer;
