import { api_key, url_base} from './../constants/api_url';
const getUrlWetaherByCity = city => {
    return `${url_base}weather?q=${city}&appid=${api_key}`;
}

export default getUrlWetaherByCity;