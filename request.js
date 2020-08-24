axios.defaults.baseURL = "https://developer.duyiedu.com/vue/bz";
axios.interceptors.response.use(res => {
    if(res.status === 200){
        return res.data;
    }
})