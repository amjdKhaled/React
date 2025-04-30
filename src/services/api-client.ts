
import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'8b90e8a258034adabc79da28aa07017f'
    }
})