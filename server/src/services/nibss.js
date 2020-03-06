const { config } = require('dotenv');
const { nibss } = require('innovation-sandbox');

config();

const {
  BVN,
  FSI_SANDBOX_URL,
  ORGANIZATION_CODE,
  SANDBOX_KEY,
} = process.env;

const sandbox_key = SANDBOX_KEY;
const organization_code = ORGANIZATION_CODE;
let password;
let ivkey;
let aes_key;

const response = reset(sandbox_key, organization_code);
console.log('response option +==>', response);

// reset request token
nibss
  .Bvnr
  .Reset({ sandbox_key, organization_code })
  .then((response) => {
    password = response.password;
    ivkey = response.ivkey;
    aes_key = response.aes_key;
  })
  .catch((error) => {
    console.log(error)
  });

// verify single BVN
nibss
  .Bvnr
  .VerifySingleBVN({
    bvn: '22161932105',
    sandbox_key,
    organization_code,
    password,
    ivkey,
    aes_key,
  })
  .then(response => {
    console.log('BVN result', response);
  })
  .catch(error => console.log(error));
