const initialState = {
  students: [],
  student: null,
  isLoading: false,
  isError: "",
  isCreated: false,
  isUpdated: false,
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
        isError: "",
      };

    case "ADD_STUDENT_SUC":
      return {
        ...state,
        isCreated: true,
        isLoading: false,
      };

    case "ADD_STUDENT_REJ":
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };

    case "GET_ALL_STUDENTS_SUC":
      return {
        ...state,
        students: action.payload,
        isLoading: false,
        isCreated: false,
        isUpdated: false,
        isError: "",
      };

    case "GET_ALL_STUDENTS_REJ":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    case "GET_STUDENT":
      return {
        ...state,
        student: action.payload,
        isLoading: false,
      };

    case "GET_STUDENT_REJ":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
        student: null,
      };

    case "UPDATE_STUDENT":
      return {
        ...state,
        isUpdated: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
