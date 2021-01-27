import axios from 'axios';
class UserPlaceHolder{
    static getusers = () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        return axios.get(url)
        .then((response)=>response)
        .catch((error)=>error)
    }
}
export default UserPlaceHolder