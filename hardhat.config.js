require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    fire:{
      url:"https://chain-node.5ire.network/v2/E598mmwkNJHnMiX_Tk-O2DkXD2gB1e_W",
      accounts:[
        "0x7f66ad0b55bcf183346fa0f25f3cc0645c56cfa06ac60ac5a0deb345c7baf304"
      ]
    }
  }
};
