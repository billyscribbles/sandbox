export const axiosConfig = {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8083' : 'http://someliveserver' //TODO: Set actual server in prod
};
