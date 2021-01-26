class JsonPlaceHolder{
    static getPosts(){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const request={
            method: "GET"
        }
    
        return fetch(url,request)
        .then(response=>{
            return response.json()
        }).catch(error=>{
            throw(error)
        })
    }
}
export default JsonPlaceHolder