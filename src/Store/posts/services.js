import axios from 'axios';

class JsonPlaceHolder{
    static getPosts(){
        const url = 'https://jsonplaceholder.typicode.com/posts'

        // return fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response =>{
        //     return response.json()
        // })
        return axios.get(url)
        .then(response=>{
           return response.data
        })
    }
}
export default JsonPlaceHolder