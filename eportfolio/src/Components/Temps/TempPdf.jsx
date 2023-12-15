import React from 'react'
import Temp01 from './Temp01';
import html2pdf from 'html2pdf.js';
import Home from '../Home';
import ResumeBuild from '../ResumeBuild';


export const TempPdf = () => {
    const convertToPDF = () => {
        const element = document.getElementById('single-page-content'); // replace 'single-page-content' with the ID of your root element
        
        html2pdf(element);
      };
    
      return (
        <div>
          <button onClick={convertToPDF}>Convert to PDF</button>
          <div id="single-page-content">
             {/* <Temp01/> */}
          </div>
        </div>
      );
}
