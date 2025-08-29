import axios from "axios";

// Replace the endpoint to point to students
const API_URL = "http://localhost:3000/students";

// ------------------ Basic Action Creators ------------------ //
export const loading = () => ({
  type: "LOADING",
});

export const addStudentSUC = () => ({
  type: "ADD_STUDENT_SUC",
});

export const addStudentRej = (err) => ({
  type: "ADD_STUDENT_REJ",
  payload: err,
});

export const getAllStudents = (data) => ({
  type: "GET_ALL_STUDENTS_SUC",
  payload: data,
});

export const getStudentsRej = (err) => ({
  type: "GET_ALL_STUDENTS_REJ",
  payload: err,
});

export const getStudent = (data) => ({
  type: "GET_STUDENT",
  payload: data,
});

export const updateStudent = () => ({
  type: "UPDATE_STUDENT",
});

// ------------------ Async Action Creators ------------------ //

// Get all students
export const getAllStudentAsync = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await axios.get(API_URL);
      dispatch(getAllStudents(res.data));
    } catch (error) {
      dispatch(getStudentsRej(error.message));
    }
  };
};

// Add new student
export const addStudentAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await axios.post(API_URL, data);
      dispatch(addStudentSUC());
    } catch (error) {
      dispatch(addStudentRej(error.message));
    }
  };
};

// Delete student
export const deleteStudentAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch(getAllStudentAsync()); // Refresh the list
    } catch (error) {
      dispatch(addStudentRej(error.message));
    }
  };
};

// Get single student by ID
export const getStudentAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      dispatch(getStudent(res.data));
    } catch (error) {
      dispatch(addStudentRej(error.message));
    }
  };
};

// Update student
export const updateStudentAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await axios.put(`${API_URL}/${data.id}`, data);
      dispatch(updateStudent());
    } catch (error) {
      dispatch(addStudentRej(error.message));
    }
  };
};
