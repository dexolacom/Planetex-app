/* eslint-disable quotes */
import axios from 'axios';

const { log } = console;

const getNFTInfo = async (uri: string) => {
  axios.defaults.baseURL = `https://ipfs.io`;

  try {
    // log('uri -->', uri);
    const response = await axios.get(`/${uri}`);
    return response;
  } catch (err) {
    log('ERR in axios getNFTInfo:', err);
  }
};

export default getNFTInfo;
