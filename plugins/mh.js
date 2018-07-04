import $ from 'jquery'
import axios from 'axios'
import 'es6-promise/auto'
const restUrl = '192.168.43.52:5000'
export default {
    getData (url, callback) {
        axios.get(url).then( res => {
            console.log(res)
            callback(res.data)
        })
    },
    postData (url, data, callback) {
        axios.post(restUrl+url, data).then( res => {
            callback(res.data)
        })
    },
    deleteData (url, data, callback) {
        axios.delete(restUrl+url, data).then( res => {
            callback(res.data)
        })
    },
    putData (url, data, callback) {
        axios.put(restUrl+url, data).then( res => {
            callback(res.data)
        })
    },
    serialize (frm) {
        return $(frm).serialize()
    }
}