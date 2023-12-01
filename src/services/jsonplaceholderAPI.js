import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/todos";

//------------------------Todos----------------------//

export const getTodosAPI = () => {
  return axios.get("/").then(({ data }) => data);
};

export const postTodoAPI = ({ title, completed = false }) => {
  return axios
    .post("/", {
      title,
      completed,
    })
    .then(({ data }) => data);
};

export const patchTodoAPI = ({ id, title, completed }) => {
  return axios
    .patch(`/${id}`, {
      id,
      title,
      completed,
    })
    .then(({ data }) => data);
};

export const deleteTodoAPI = async (todoId) => {
  await axios.delete(`/${todoId}`);
  toast(`Task ${todoId} deleted`);
  return todoId;
};
