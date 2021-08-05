
import axios from 'axios';
const baseUrl="http://localhost:5000/api";
const  handleError = (error, methodName) => {
    var errMsg;

    if (error.status === 303) {
     throw '303'
    }

    if (error.name === 'HttpErrorResponse') {
     
      throw('תקלה בגישה לשרת');
    }

    
    throw 'error';
};

const httpGet = url =>{
    return axios.get(`${baseUrl}/${url}`);
}
const httpPost = (url, body) =>{
    return axios.post(`${baseUrl}/${url}`,  body);
}
const httpDelete = (url) =>{
    return axios.delete(`${baseUrl}/${url}`);
};

export default {
    httpGet,
    httpPost,
    httpDelete,
    handleError
};