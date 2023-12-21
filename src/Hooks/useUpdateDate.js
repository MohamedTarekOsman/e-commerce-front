import baseUrl from "../Api/baseUrl";


const useUpdateDataWithImage = async(url,params) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url,params,config);
    return res.data;
}
const useUpdateData=async(url,params)=>{
    const config = {
        headers: {
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url,params,config);
    return res.data;
}
export  {useUpdateData,useUpdateDataWithImage}