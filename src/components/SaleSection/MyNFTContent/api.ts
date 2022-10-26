/* eslint-disable quotes */
import axios from 'axios';

const { log } = console;

const getNFTInfo = async (uri: string) => {
  log('uri -->', uri);

  axios.defaults.baseURL = `https://ipfs.io`;

  // try {
  //   const response = await axios.get(`/${uri}`);
  //   return response;
  // } catch (err) {
  //   log('ERR in axios getNFTInfo:', err);
  // }
};

export default getNFTInfo;
