import axios from 'axios';

class JsonPlaceHolder{
    static getPosts(){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        return axios.get(url)
        .then(response=>{
           return response
        })
    }
}
export default JsonPlaceHolder