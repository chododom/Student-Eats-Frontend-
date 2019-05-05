import axios from "axios";
import {BASE_URL} from "../config/environment";

export function isAuthenticated(){
    return localStorage.getItem("token") !== null && localStorage.getItem("token") !== 'undefined';
}

export function steaGet(url, options = {}){
    if(!options.headers)options.headers = {};
    options.headers.authorization = localStorage.getItem("token");
    return axios.get(BASE_URL + url, options);
}