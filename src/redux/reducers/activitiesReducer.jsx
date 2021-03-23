import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: "",
    name: "",
    duration: "",
  },
];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_ACTIVITY":
      return [
        ...state,
        {
          id: uuidv4(),
          name: payload.name,
          duration: payload.duration,
        },
      ];

    case "DELETE_ACTIVITY":
      const copyState = [...state];
      //Find id of object to remove
      const i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }
};

export default activitiesReducer;
