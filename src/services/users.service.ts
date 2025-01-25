import axios from "axios";
import {UserPayload, UserServiceResponse} from '../interfaces/service.interface';


const headers = {
    "Accept": "application/json"
};

class usersService {

    getAll(): Promise<any> {
        return axios.get(`http://localhost:9092/v1/ReCustom/getUsers`, {headers});
    }

    getUser(email: string): Promise<UserServiceResponse> {
        return axios.get(`http://localhost:9092/v1/ReCustom/getUser/${email}`);
    }

    create(data: UserPayload): Promise<UserServiceResponse> {
        return axios.post(`http://localhost:9092/v1/ReCustom/createUser`, data);
    }

    update(data: UserPayload): Promise<UserServiceResponse> {
        return axios.put(`http://localhost:9092/v1/ReCustom/updateUser`, data);
    }

    delete(email: string): Promise<UserServiceResponse> {
        return axios.delete(`http://localhost:9092/v1/ReCustom/deleteUser/${email}`);
    }

}

export default new usersService();