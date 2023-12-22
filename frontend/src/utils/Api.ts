import axios, { AxiosError } from 'axios';

const baseURL = 'http://localhost:3100';

const axiosBase = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

// error processing function
function processError(error: AxiosError) {
  if (error.response) {
    return Promise.reject(
      new Error(
        `Status: ${error.response.status}. Data: ${error.response.data}`
      )
    );
  }
  if (error.request) {
    return Promise.reject(new Error(error.request));
  }
  return Promise.reject(new Error(error.message));
}

// receive tests function
export function getTests() {
  return axiosBase
    .get(`/tests`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// receive test by id function
export function getTestById(id: number) {
  return axiosBase
    .get(`/tests/${id}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// receive sites function
export function getSites() {
  return axiosBase
    .get(`/sites`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// receive site by id function
export function getSiteById(id: number) {
  return axiosBase
    .get(`/sites/${id}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
