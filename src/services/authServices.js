import axios from 'axios';

// some dummy functions
export const login = (email, password) => {
    if(email === "ziqi@gmail.com" && password === "20011207")
        return "successful"
    else
        return "false"
};

export const signup = async (username, email, password) => {
    return "successful"
};