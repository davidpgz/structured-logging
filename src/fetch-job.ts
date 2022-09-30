import { randomDelay } from './random-delay';
import { logger, jobs } from './index';

export async function fetchJob(jobName: string) {
    logger.log("Fetching Job...");

    // to simulate fetching
    await randomDelay();
    logger.log('Checking for failure');
    await randomDelay();

    const failingJob = Math.round(Math.random() * 2);
    if (+jobName === failingJob) {
        throw Error("We're going down!!!");
    };

    const displayName = jobs[+jobName];
    logger.log(`Display name ${displayName}`);
    await randomDelay();

    logger.log(`Fetched job ${jobName}`);

    return {
        name: jobName,
        displayName,
    };
}
