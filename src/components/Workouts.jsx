import React, { useState } from "react";
import Activity from "./Activity";
import "../App.css";
import { useSelector } from "react-redux";
import AddACtivity from "./AddACtivity";

function Workouts() {
  const allActivities = useSelector((state) => state.activities);
  const [add, setAdd] = useState(false);
  console.log(allActivities);

  return (
    <div>
      <h2>My Workouts</h2>
      <button onClick={() => setAdd(!add)} >Add Activity</button>
      <br/>
      {add && <AddACtivity />}
      {allActivities.map((activity) => {
        console.log(activity);
        return <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration} />;
      })}
    </div>
  );
}

export default Workouts;
