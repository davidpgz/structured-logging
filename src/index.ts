import express from 'express';
import { randomDelay } from './random-delay';
import SimpleLogger from './simple-logger';

const jobs = ['job 3','job 5','job 7']

const logger = new SimpleLogger();
const app = express();

app.use('/jobs/:name', async function(req, res, next){
    const jobName = req.params.name;
    logger.log(`Job request for ${jobName}`)

    try {
        const job = await fetchJob(jobName)
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

async function fetchJob(jobName: string) {
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
