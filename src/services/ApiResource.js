import axios from "axios";
import {BASE_URL} from "../config/environment";

/**
 * checks whether the user is logged in
 * @returns {boolean}
 */
export function isAuthenticated(){
    return localStorage.getItem("token") !== null && localStorage.getItem("token") !== 'undefined';
}

/**
 * component providing communication with backend via get method (BASE_URL form environment)
 * @param url - url addition after backslash (eg. /user/1)
 * @param options - options that are to be send alongside the request
 * @returns {AxiosPromise<any>}
 */
export function steaGet(url, options = {}){
    if(!options.headers)options.headers = {};
    options.headers.authorization = localStorage.getItem("token");
    return axios.get(BASE_URL + url, options);
}

/**
 * component providing communication with backend via post method (BASE_URL form environment)
 * @param url - url addition after backslash (eg. /user/1)
 * @param data - data send alongside the request (eg. food information in new order request -
   {food: 1, note: 'something', ... })
 * @param options - options that are to be send alongside the request
 * @returns {AxiosPromise<any>}
 */
export function steaPost(url, data, options = {}){
    if(!options.headers)options.headers = {};
    options.headers.authorization = localStorage.getItem("token");
    return axios.post(BASE_URL + url, data, options);
}