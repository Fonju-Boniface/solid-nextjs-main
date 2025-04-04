// "use client";
import React from "react";
import { BiDownload } from "react-icons/bi";

const DownloadResume = () => {
  const documentData = {
    title: "Sample-Resume",
    pdf: "/docs/doc/Resume-doc.pdf", // Replace with actual PDF URL
  };
  const handleDownload = () => {
    const link = window.document.createElement("a");
    link.href = documentData.pdf;
    link.download = `${documentData.title}.pdf`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  return (
    <div className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none" onClick={handleDownload} >
      <BiDownload size={21} />
    </div>
  );
};

export default DownloadResume;
