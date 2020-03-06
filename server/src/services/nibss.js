const { config } = require('dotenv');
const { nibss } = require('innovation-sandbox');

config();

const BVNr = nibss.Bvnr;

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

// get reset token
const resetToken = (sandbox_key, organization_code) => new Promise((resolve, reject) => {
  BVNr.Reset({sandbox_key, organization_code}, (error, payload) => {
    if (error) {
      console.log(error);
      reject(error);
    } else {
      console.log(payload);
      resolve(payload);
    }
  });
});

const verifyBVN = ({ options }) => new Promise((resolve, reject) => {
  const result = await BVNr.VerifySingleBVN({options});
  return result;
});

module.exports = {
  resetToken,
  verifyBVN
};
