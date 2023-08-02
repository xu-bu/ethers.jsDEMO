const { ethers, formatEther } = require("ethers");

const provider = new ethers.JsonRpcProvider(`${YOUR_ALCHEMY_API}`)

const address = '0x52906abb6B9d358eEF7D903cf1ecb521643297f4'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${formatEther(balance)} ETH\n`)
}

main()
