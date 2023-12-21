import baseUrl from "../Api/baseUrl";
const useDeleteData =async (url) => {
    const config = {
        headers: {
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.delete(url, config);
    return res.data;
}
export default useDeleteData;