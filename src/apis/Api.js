import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const loginUserApi = (data) => Api.post("/api/user/login", data);
export const registerUserApi = (data) => Api.post("/api/user/create", data);
export const createJeweleryApi = (data) => Api.post("api/jewelry/", data);

export const getAllJeweleryApi = () => Api.get("/api/jewelry/");
export const getSingleJeweleryApi = (id) => Api.get(`/api/jewelry/${id}`);
export const updateJeweleryApi = (id, formData) =>
  Api.put(`/api/jewelry/${id}`, formData, config);
export const deleteJeweleryApi = (id) =>
  Api.delete(`/api/jewelry/${id}`, config);
