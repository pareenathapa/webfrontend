import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:1000",
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
export const createJeweleryApi = (data) => Api.post("/api/user/create", data);

export const getAllJeweleryApi = () =>
  Api.get("/api/jewelery/get_all_jewelerys");
export const getSingleJeweleryApi = (id) =>
  Api.get(`/api/jewelery/get_single_jewelery/${id}`);
export const updateJeweleryApi = (id, formData) =>
  Api.put(`/api/jewelery/update_jewelery/${id}`, formData, config);
export const deleteJeweleryApi = (id) =>
  Api.delete(`/api/jewelery/delete_jewelery/${id}`, config);
