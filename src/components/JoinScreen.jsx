import React from "react";

const JoinScreen = ({start}) => {
  return (
    <div>
      <h2 className="justify-center items-center text-2xl font-bold text-center flex h-[4rem] m-auto">Start Quiz</h2>
      <p className="w-[90%] mx-auto mb-4">
        Quiz App for Practicing Federal Scholarship Board of Nigeria (FSBN) Past Questions. 
      </p>
      <button className="button mx-auto" onClick={start}>Start</button>
    </div>
  );
};

export default JoinScreen;
