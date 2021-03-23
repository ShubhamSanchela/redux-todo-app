import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddACtivity() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    duration: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(data);

  const addAvtivity = () => {
    console.log("run");
    dispatch({
      type: "CREATE_ACTIVITY",
      payload: {
        name: data.name,
        duration: data.duration,
      },
    });
  };

  return (
    <div className="activity-input">
      <div >
        <p>Activity :</p>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Add a activity..."
        />
      </div>
      <br/>
      <div >
        <p>Duration :</p>
        <input
          onChange={handleChange}
          type="text"
          name="duration"
          placeholder="Activity Name..."
        />
      </div>
      <br/>
      <button className="btn" onClick={addAvtivity}>Add Activity</button>
    </div>
  );
}

export default AddACtivity;
