
import axios from 'axios'

let api={
    getData: async (url)=>{
        let request = await axios.get(url)
        return request.data
    }
}
export default api
