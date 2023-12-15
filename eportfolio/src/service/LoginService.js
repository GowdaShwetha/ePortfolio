import React from 'react';
import axios from 'axios';

const Login_API_BASe_URL="http://localhost:8080/api/v1/portfolio";

class LoginService 
{
    getLoginDetails()
    {
        return axios.get(Login_API_BASe_URL);
    }  
    createLogin(login)
    {
        return axios.post(Login_API_BASe_URL,login)
    }
}
export default new LoginService
