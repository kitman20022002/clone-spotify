import axios from 'axios';
import apis from '../config/apis';

export const storeEvent = (data) => axios.post(`${apis.API_URL + apis.VERSION}/events`, data);

// eslint-disable-next-line max-len
export const updateEvent = (data, id) => axios.put(`${apis.API_URL + apis.VERSION}/events/${id}`, data);

export const viewEvent = (id) => axios.get(`${apis.API_URL + apis.VERSION}/events/${id}`);

// eslint-disable-next-line max-len
export const deleteEvent = (data, id) => axios.delete(`${apis.API_URL + apis.VERSION}/events/${id}`, data);

export const viewEvents = () => axios.get(`${apis.API_URL + apis.VERSION}/events`);

// eslint-disable-next-line max-len
export const searchEvents = (events) => axios.get(`${apis.API_URL + apis.VERSION}/search?search=${events}`);

/** ******************************************************************************************** */

export const storeUser = (data) => axios.post(`${apis.API_URL + apis.VERSION}/users`, data);

// eslint-disable-next-line max-len
export const updateUser = (data, id) => axios.put(`${apis.API_URL + apis.VERSION}/users/${id}`, data);

export const viewUser = (id) => axios.get(`${apis.API_URL + apis.VERSION}/users-me/${id}`);

export const deleteUser = (data) => axios.delete(`${apis.API_URL + apis.VERSION}/users`, data);

export const signIn = (data) => axios.post(`${apis.API_URL + apis.VERSION}/auth/login`, data);

// eslint-disable-next-line no-useless-concat,max-len
export const getDog = () => axios.get(`${'https://dog.ceo' + '/api/breed/hound/'}images`);
