/* eslint-disable quotes */
// @ts-nocheck
/* eslint-disable indent */
import axios from 'axios';

const { log } = console;

// let count = 0;

const getNFTInfo = async (uri) => {
  axios.defaults.baseURL = `https://ipfs.io`;

  try {
    const response = await axios.get(`/${uri}`);
    return response;
  } catch (err) {
    log('ERR in axios getNFTInfo:', err.message);
  }
};

export default getNFTInfo;
