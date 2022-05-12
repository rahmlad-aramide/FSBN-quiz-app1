import React from "react";

import Nav from "./components/Nav";
import QuizScreen from "./components/QuizScreen";
import JoinScreen from "./components/JoinScreen";
import Footer from "./components/Footer"

const App = () => {
	const [isQuizStarted, setIsQuizStarted] = React.useState(false);
  return (
    < >
      <Nav />
	  <div className="quiz-container flex justify-center items-center h-[85vh]">
		<div className="border-2 relative bg-white shadow lg:w-[50vw] w-[95%]">
			{isQuizStarted? (
				<QuizScreen retry={()=>setIsQuizStarted(false)}/>	
			): (
				<JoinScreen start={()=>setIsQuizStarted(true)}/>
			)}
		</div>
	  </div>
      <Footer />
    </>
    
  );
};

export default App;
