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
        <b><p>Activity :</p></b>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Add a activity..."
          style={{ marginRight: "10px" }}
        />
      </div>
      <br />
      <div >
        <b><p>Duration :</p></b>
        <input
          onChange={handleChange}
          type="text"
          name="duration"
          placeholder="Activity Name..."
          style={{ marginRight: "10px", marginBottom: "10px" }}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={addAvtivity}>Add Activity</button>
    </div>
  );
}

export default AddACtivity;
