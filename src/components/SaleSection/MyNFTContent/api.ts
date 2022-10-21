/* eslint-disable quotes */
// @ts-nocheck
/* eslint-disable indent */
import axios from 'axios';

const { log } = console;

// let count = 0;

const getNFTInfo = async (uri) => {
  axios.defaults.baseURL = `https://ipfs.io/ipfs`;

  // console.log('uri -->', uri);

  try {
    const response = await axios.get(`/${uri}`);
    return response;
  } catch (err) {
    log('ERR in axios getNFTInfo:', err.message);
    // count += 1;
    // count < 20
    //   ? getNFTInfo(uri)
    //   : {
    //       name: 'no noame',
    //       profession: 'no profession',
    //       skills: 'no skills',
    //       image: 'no image',
    //     };
  }
};

// const getNFTInfo = async (uri) => {
//   return uri === 1
//     ? {
//         data: {
//           name: "Robot 'Skeleton 11'",
//           profession: 'Spaceship Guardian',
//           skills: 'Health, Armor',
//           image: 'ipfs/QmXKK7h7EfuYiEkcRnwWHi8Ju9wsXB8AhahrXF9qeWsGwb',
//         },
//       }
//     : {
//         data: {
//           name: 'Other NFT',
//           profession: 'The Guardian',
//           skills: 'Speed, Armor, Damage',
//           image: 'ipfs/QmXKK7h7EfuYiEkcRnwWHi8Ju9wsXB8AhahrXF9qeWsGwb',
//         },
//       };
// };

export default getNFTInfo;
