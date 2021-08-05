import baseApi from './baseApi';

const controllerName = 'Calculator';
const GetCalc = async(calc) => {
    const url = `${controllerName}/Calc`;
    const response = await baseApi.httpPost(url, calc)
    return response;
}

const GetAllCalc = async () => {
    const url = `${controllerName}/GetAllHistory`;
    const response = await baseApi.httpGet(url);
    return response;
}
const DeleteCalculatr = async(id) => {
    const url = `${controllerName}/${id}`;
    const response = await baseApi.httpDelete(url)
    return response;
}
const UpdateCalculatr = async(id, calculator) => {
    const url = `${controllerName}`;
    const response = await baseApi.httpPost(url, calculator)
    return response;
}

export default {
    GetCalc,
    GetAllCalc,
    DeleteCalculatr,
    UpdateCalculatr
}

