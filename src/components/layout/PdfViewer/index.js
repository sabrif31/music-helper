import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const CustomPDFViewer = ({ path }) => {
    return <PDFViewer document={{ url: path }} />;
}
export default CustomPDFViewer
