require('dotenv').config();
const fs = require('fs');
const path = require('path');
const request = require('request');
const algoliasearch = require('algoliasearch');

const client = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_WRITE_KEY);
const index = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX);

const host = 'ghosttownfinder.dev';
const certFile = path.resolve(__dirname, `ssl/${host}.crt`);
const keyFile = path.resolve(__dirname, `ssl/${host}.key`);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const getTowns = async () => {
    let response;
    try {
        response = await request.get({
            url: 'https://ghosttownfinder.dev/!/Fetch/collection/towns?deep=true',
            agentOptions: {
                key: fs.readFileSync(keyFile),
                cert: fs.readFileSync(certFile),
            },
        });
    } catch (error) {
        console.log(error);
    }
    console.log(response);
};

getTowns();

// const towns = require('./src/data/towns.json');

// { objectIDs:
//     [ '23117210',
//       '23117200',
//       '23117190',
//       '23117180',
//       '23117170',
//       '23117160',
//       '23117150',
//       '23117140',
//       '23117130',
//       '23101410',
//       '23101220',
//       '23085200' ],
//    taskID: 2940665692 }
// index.saveObjects(towns).then(function(res) {
//     console.log(res);
// });
