const hre = require("hardhat")


const main=async()=>{
    const CrowdFunding=await hre.ethers.getContractFactory("CrowdFunding");
    const funding=await CrowdFunding.deploy(1000,3600);
    await funding.deployed();
    console.log("address : ",funding.address)
}

// const runMain=async()=>{
//     try{
//         await main();
//         process.exit(0);
//     }
//     catch{
//         // console.log(err)
//         process.exit(1);
//     }
// }

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });