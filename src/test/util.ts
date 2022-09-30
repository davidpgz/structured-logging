import axios from 'axios';

export async function fetchJob(jobName: string) {
    return await axios.get(`http://localhost:8080/jobs/${jobName}`)
        .then(response => console.log(response.data))
        .catch(response => console.error(response.code));
}

export const pickJobName = () => Math.round(Math.random() * 2).toString();