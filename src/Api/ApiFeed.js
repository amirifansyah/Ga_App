import { create } from "apisauce";

const ApiFeed=create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default ApiFeed;