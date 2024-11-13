import React from "react";
import Button from '../Button'
function WhatWeDo() {
  return (
    <div className="bg-gray-100  ">
      <div className="w-[95%] md:w-[70%] mx-auto ">
        <div className="flex items-center md:items-start justify-center flex-col md:flex-row space-x-8 py-20">
          <h2 className="text-6xl pb-6 row-span-6 text-center md:text-right mx-auto md:w-[60%] ">
            We help marketers understand, pilot, and <span className="text-orange-400">scale AI</span>
          </h2>
          <div className="">
          <p className="text-2xl font-bold">
            AI is forecasted to have trillions of dollars in annual impact, yet
            many marketers struggle to understand what it is and how to apply it
            to their marketing programs. That's where we come in.
          </p>
          <p className="text-md pt-6">
            Marketing AI Institute is a media, event, and online education
            company making AI approachable and accessible to marketing and
            business leaders around the world.
          </p>
          <br />
          <p>
            Since 2016, we've published 700+ articles to help marketers
            understand, pilot, and scale AI. We track and analyze hundreds of
            AI-powered vendors with $18+ billion in combined funding. And we
            partner with top AI-first companies to bring you exclusive insights
            straight from the cutting-edge of AI adoption and implementation.
          </p><br />
          <p>
            This work has turned our team into industry-leading experts on the
            potential opportunities and practical considerations presented by AI
            in marketing.
          </p>
          <Button routName="ABOUT US" className="bg-blue-500 mt-4 "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
