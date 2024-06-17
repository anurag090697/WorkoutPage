/** @format */

import React from "react";

function Exercise(props) {
  return (
    <div className='flex flex-wrap gap-8 items-center justify-center py-8'>
      {console.log(props.data)}
      {props.data.map((ele, idx) => {
        return (
          <div key={idx}>
            <img src={ele.gifUrl} alt='' className="rounded"/>
            <div className='flex items-center justify-start gap-4 py-2 bg-white pl-3'>
              <h3 className='rounded-xl bg-red-400 p-2 font-medium'>
                {ele.bodyPart}
              </h3>{" "}
              <h3 className="rounded-xl bg-yellow-500 p-2 font-medium">{ele.target}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Exercise;
