import baseUrl from "../Api/baseUrl";

const useGetData =async(url,params)=>{
    const res=await baseUrl.get(url,params)
    return res.data;
}

const useGetDatataToken =async(url)=>{
    const config={
        headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
    }
    const res=await baseUrl.get(url,config)
    return res.data;
}

export {useGetData,useGetDatataToken}