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
        Activity :{props.name}, Duration : {props.duration}
        <button onClick={deleteActivity}>Delete</button>
      </div>
    </div>
  );
}

export default Activity;
