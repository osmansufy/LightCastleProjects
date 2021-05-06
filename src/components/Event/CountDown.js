import React from "react";
import Countdown from "react-countdown";
const CountDown = () => {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="counterWrapper h-100">
          <h3 className="text-center">Event launch in </h3>
          <div className="d-flex flex-wrap align-items-center">
            <div className="countItem">
              <h4>{days}</h4>
              <p>Days</p>
            </div>
            <div className="countItem">
              <h4>{hours}</h4>
              <p>Hours</p>
            </div>
            <div className="countItem">
              <h4>{minutes}</h4>
              <p>Minutes</p>
            </div>
            <div className="countItem">
              <h4>{seconds}</h4>
              <p>Seconds</p>
            </div>
            <span></span>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <Countdown date={"2021-07-07T01:02:03"} renderer={renderer} />,
    </>
  );
};

export default CountDown;
