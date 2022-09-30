import { randomDelay } from '../random-delay';
import { fetchJob, pickJobName } from './util';

function runTest() {
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
}

runTest();