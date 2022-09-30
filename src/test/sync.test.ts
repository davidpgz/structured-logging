import axios from 'axios';
import { fetchJob, pickJobName } from './util';

async function runTest() {
    await fetchJob(pickJobName());
    await fetchJob(pickJobName());
    await fetchJob(pickJobName());
    await fetchJob(pickJobName());
    await fetchJob(pickJobName());
}

runTest();