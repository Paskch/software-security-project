const axios = require('axios');
const fuzzer = require('fuzzer');
const winston = require('winston');
const qs = require('qs');

const crypto = require('crypto');

function randomGarbageString(length = Math.random() * 100 + 1) {
  return crypto.randomBytes(length).toString('hex') + `!@#$%^&*()<script>alert(1)</script>`;
}


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: 'fuzzing.log' }),
    new winston.transports.Console()
  ]
});



async function fuzzProfile(cookie) {
  for (let i = 0; i < 100000; i++) {


    const payload = qs.stringify({
  firstName: randomGarbageString(),
  lastName: randomGarbageString(),
  ssn: randomGarbageString(),
  bankAcc: randomGarbageString(),
  bankRouting: randomGarbageString()
});


    try {
      const res = await axios.post(
        'http://localhost:4000/profile',
        payload,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: cookie
          },
          validateStatus: () => true
        }
      );

      if (res.status >= 500) {
        logger.warn(`[!] POSSIBILE CRASH - Status ${res.status} con input: ${payload}`);
      } else {
        logger.info(`[i] Status ${res.status} per input: ${payload}`);
      }
    } catch (err) {
      logger.error(`[EXCEPTION] Input: ${payload} -> ${err.message}`);
    }
  }

  logger.info('Fuzzing completato');
}


(async () => {
const cookie = 'connect.sid=s%3AXTSGJ2gMWIhF-5cml_SrmXa9Txyb09Yp.M1u1K%2F4Y7vL0e6vMALX%2FN0gNps2UOhYZLnAnHPNpIdo'; 
  await fuzzProfile(cookie);
})();
