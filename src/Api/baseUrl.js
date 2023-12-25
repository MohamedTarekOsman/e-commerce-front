import axios from "axios";

//axios instance
const baseUrl= axios.create({baseURL:"https://e-commerce-back-e7fz.onrender.com"})
//const baseUrl= axios.create({baseURL:"https://mohamed-tarek-e-commerce.cyclic.app"})
//const baseUrl= axios.create({baseURL:"http://localhost:8000"})

export default baseUrl