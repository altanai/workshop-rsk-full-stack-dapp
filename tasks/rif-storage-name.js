#!/usr/bin/env node

// ipfs key gen --type=rsa --size=2048 workshop-rsk-full-stack-dapp

const rifStorageUtil = require('./rif-storage-util.js');

async function ipfsToIpns(ipfsCid) {
  const storage = rifStorageUtil.getInstance();
  const {
    name: ipnsHash,
    value: ipfsHash
  } = await storage.ipfs.name.publish(
    ipfsCid,
    { key: 'workshop-rsk-full-stack-dapp' }
  );
  console.log({
    ipnsHash,
    ipfsHash,
  });
}

ipfsToIpns(process.argv[2])
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
