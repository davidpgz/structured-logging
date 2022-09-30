import express from 'express';
import { fetchJob } from './fetch-job';
import SimpleLogger from './simple-logger';

export const jobs = ['job 3','job 5','job 7']

export const logger = new SimpleLogger();
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
    }
});

app.listen(8080, function(){
    console.log('We are open for business!');
});



