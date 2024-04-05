import axios from 'axios'

let baseURL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'https://gc-services-testing.onrender.com'
} else {
    baseURL = 'https://gc-services-testing.onrender.com'
}
const instance = axios.create({
    baseURL
})
 
// let t = sessionStorage.getItem(accessToken)
// let token = !!t ? JSON.parse(t) : ""
// instance.defaults.headers.common['Authorization'] = `Bearer ${token?.accessToken}`
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers.common['Allow-Origin'] = 'true'
export default instance

