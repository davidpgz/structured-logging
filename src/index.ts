import express from 'express';
import { Logger, SimpleLogger } from './logger';
import { randomDelay } from './random-delay';

const jobs = ['job 3','job 5','job 7']

const app = express();

app.use('/jobs/:name', async function(req, res, next){
    const logger = new SimpleLogger();
    const jobName = req.params.name;
    logger.log(`Job request for ${jobName}`)

    try {
        const job = await fetchJob(logger, jobName)
        res.status(200).send({ job })
        logger.log(`Request status 200`);
    } catch (error) {
        logger.log(error);
        res.status(500).send({ message: "We're down..."})
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
