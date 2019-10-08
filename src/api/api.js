import axios from 'axios';

export default axios.create({
    baseURL: 'yourapi', //Inser your rest api HTTP - not here becaus of git
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    // xsrfCookieName: 'csrftoken',
    //xsrfHeaderName: 'X-CSRFToken',
    // withCredentials: true
});