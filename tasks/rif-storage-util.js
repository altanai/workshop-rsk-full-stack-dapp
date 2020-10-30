const rifStorage = require('@rsksmart/rif-storage');

function getInstance() {
  const rifStorageInst = rifStorage.default(
    rifStorage.Provider.IPFS,
    {
      host: 'localhost',
      port: '5001',
      protocol: 'http',
    },
  );
  return rifStorageInst;
}

module.exports = {
  getInstance,
};
