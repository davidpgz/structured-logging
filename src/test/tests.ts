import axios from 'axios';
import { randomDelay } from '../random-delay';

async function fetchJob(jobName: string) {
    return await axios.get(`http://localhost:8080/jobs/${jobName}`)
        .then(response => console.log(response.data))
        .catch(response => console.error(response.code));
}

const pickJobName = () => Math.round(Math.random() * 2).toString();

fetchJob(pickJobName())
fetchJob(pickJobName())
fetchJob(pickJobName())
randomDelay(100);
fetchJob(pickJobName())
fetchJob(pickJobName())
fetchJob(pickJobName())
randomDelay(100);
fetchJob(pickJobName())
fetchJob(pickJobName())
fetchJob(pickJobName())