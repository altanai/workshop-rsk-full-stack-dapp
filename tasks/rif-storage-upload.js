#!/usr/bin/env node

// ipfs init
// ipfs daemon

const rifStorageUtil = require('./rif-storage-util.js');

async function uploadToIpfs() {
  const storage = rifStorageUtil.getInstance();
  const date = new Date();
  const dynamicData = [
    'RSK Full Stack DApp Tutorial Part 4',
    date.toISOString(),
    Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
    '',
  ].join('\n');
  const fileBuffer = Buffer.from(dynamicData);
  const fileHash = await storage.put(fileBuffer);
  console.log('fileHash:' + fileHash);

  const retrievedData = await storage.get(fileHash);
  console.log('retrievedData: ' + retrievedData.toString());

  console.log('pins:');
  await storage.ipfs.pin.add(fileHash);
  const pins = await storage.ipfs.pin.ls();
  console.log(pins);

  console.log('foundPin:');
  const foundPin = pins.find((pin) => (pin.hash === fileHash));
  console.log(foundPin);

  //await storage.ipfs.pin.rm(fileHash)

  return fileHash;
}

uploadToIpfs()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
