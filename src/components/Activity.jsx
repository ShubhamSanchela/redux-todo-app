import React from "react";
import { useDispatch } from "react-redux"

function Activity(props) {
  const dispatch = useDispatch();
  const deleteActivity = () => {
    dispatch({
      type: "DELETE_ACTIVITY",
      payload: {
        id: props.id
      }
    })
  }
  return (
    <div>
      <div >
        <b>Activity :</b> {props.name}, <b>Duration :</b>  {props.duration}
        <button className="btn btn-primary mt-4" style={{ marginLeft: "10px", marginBottom: "10px" }} onClick={deleteActivity}>Delete</button>
      </div>
    </div>
  );
}

export default Activity;
