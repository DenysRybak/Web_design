import axios from 'axios';

const BASE_URL = 'http://localhost:8080/cars'; 

export const getAllCars = () => {
    return axios.get(`${BASE_URL}`);
};

export const getCar = (id) => {
    return axios.get(`${BASE_URL}/${id}`)
};

export const createCar = (carData) => {
    return axios.post(`${BASE_URL}`, carData);
};

export const updateCar = (id, carData) => {
    return axios.put(`${BASE_URL}/${id}`, carData);
};

export const deleteCar = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};