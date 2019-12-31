const axios =require('axios')

function getList(url){
    return axios.get(url)
        .then((res)=>{
             return res
        })
}

export {
    getList
}