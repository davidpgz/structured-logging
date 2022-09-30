import express from 'express';
import { Logger, SimpleLogger } from './logger';
import { randomDelay } from './random-delay';

const jobs = ['job 3','job 5','job 7']

const app = express();

app.use('/jobs/:name', async function(request, response){
    const logger = new SimpleLogger();
    const jobName = request.params.name;
    logger.log(`Job request for ${jobName}`)

    try {
        const job = await fetchJob(logger, jobName)
        response.status(200).send({ job })
        logger.log(`Request status 200`);
    } catch (error) {
        logger.log(error);
        response.status(500).send({ message: "We're down..."})
        logger.log(`Request status 500`);
    }
});

app.listen(8080, function(){
    console.log('We are open for business!');
});

async function fetchJob(logger: Logger, jobName: string) {
    logger.log("Fetching Job...");

    // To simulate fetching time
    await randomDelay();
    logger.log('Checking for failure');
    await randomDelay();

    // To simulate failure
    const failingJob = Math.round(Math.random() * 2);
    if (+jobName === failingJob) {
        throw Error("We're going down!!!");
    };

    // Successfull job fetch
    const displayName = jobs[+jobName];
    logger.log(`Display name ${displayName}`);
    await randomDelay();

    logger.log(`Fetched job ${jobName}`);

    return {
        name: jobName,
        displayName,
    };
}
