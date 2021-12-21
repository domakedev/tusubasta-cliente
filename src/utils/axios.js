import axios from 'axios'

// const clienteAxios = function clienteAxios() {
//   axios.create({
//     baseURL: 'https://fakestoreapi.com',
//   })
// }


const clienteAxios = axios.create({
  baseURL:  'https://fakestoreapi.com'
})

export default clienteAxios
