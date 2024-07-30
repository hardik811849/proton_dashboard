import { ethers, BigNumber, providers } from "ethers";
import { contractDetails } from "./contractDetils";
import { getAccount } from "@wagmi/core";

const bigNumber = 1.1579208923731621e61;

const getMetaMask = () => {
  const providerMetaMask = new ethers.BrowserProvider(window.ethereum);
  return providerMetaMask;
};

const getAccountDetails = async (setAlertMetaMaskLogOut) => {
  let { address } = getAccount();
  try {
    const details = {};
    const accounts = address;
    const provider = new ethers.BrowserProvider(window.ethereum, "any");
    const networkName = await provider.getNetwork();
    const chainId = await window.ethereum.request({ method: "net_version" });
    // const balanceCheckprovider = new ethers.Contract(
    //   contractDetails["wbtc"].address[chainId],
    //   contractDetails["wbtc"].abi,
    //   provider
    // );
    // const balance = await balanceCheckprovider.balanceOf(accounts);
    details.account = accounts;
    details.networkName = networkName.name;
    details.chainId = chainId;
    // details.balance = ethers.utils.formatUnits(balance, 8);
    if (accounts.length) {
      return details;
    } else {
      console.log("ERROR IN  METAMASK CONNECTION");
    }
  } catch (error) {
    return false;
  }
};

const getChainId = async () => {
  try {
    const network = await getAccountDetails();
    return network.chainId;
  } catch (error) {
    console.log(error);
  }
};

const getNetworkName = async () => {
  try {
    const accountDetails = await getAccountDetails();
    return accountDetails.networkName;
  } catch (error) {
    console.log(error);
  }
};

const readContractFunction = async (token) => {
  const chainId = await getChainId();
  const provider = await getMetaMask();
  return new ethers.Contract(
    contractDetails[token].address[chainId],
    contractDetails[token].abi,
    provider
  );
};

const writeContractFunction = async (token) => {
  const mProviderInner = getMetaMask();
  const signer = await mProviderInner.getSigner();
  const chainId = await getChainId();
  return new ethers.Contract(
    contractDetails[token].address[chainId],
    contractDetails[token].abi,
    signer
  );
};

const usdToken = async (value) => {
  const chainId = await getChainId();
  const writeFunction = await writeContractFunction("usdt");
  let add = contractDetails["ProtonAuction"].address[chainId];
  const approve = await writeFunction.approve(add, value);
  // const mint = await writeFunction.mint(
  //   "0xb17c0208150E4DE2F9228f30F8EA15Bd0b2a9dA7",
  //   "10000000000000000000000000"
  // );
  console.log(approve.hash);
  return approve.hash;
};

const getProtonCalulate = async (value) => {
  try {
    const provider = await getMetaMask();
    const readFunction = await readContractFunction("ProtonAuction");
    let getAmount = await readFunction.calculateTokenAmount(value);
    const amnt = Number(getAmount);
    // const val = ethers.parseUnits(amnt.toString(), 18);
    console.log(typeof amnt, "proton value-->", amnt);
    return amnt.toString();
  } catch (err) {
    console.log(err);
  }
};

const investNow = async (value) => {
  try {
    const provider = await getMetaMask();
    const readFunction = await readContractFunction("ProtonAuction");
    let getAmount = await readFunction.calculateTokenAmount(value);
    const amnt = Number(getAmount);
    console.log(ethers.parseUnits(amnt.toString(), 18));
    const strNumber = ethers.parseUnits(amnt.toString(), 18);
    const approveToken = await usdToken(strNumber.toString());
    let waitFortrnc = await provider.waitForTransaction(approveToken);
    if (waitFortrnc) {
      const writeFunction = await writeContractFunction("ProtonAuction");
      const amount = await writeFunction.buyTokens(strNumber);
      console.log(amount);
    }
  } catch (error) {
    console.log(error);
  }
};

const checkBalance = async () => {
  try {
    const readFunction = await readContractFunction("usdt");
    const checkBal = await readFunction.balanceOf(
      "0xaF5Cb16484c7920A453418dC89720A2C599BFD2B"
    );
    return checkBal;
  } catch (error) {
    console.log(error);
  }
};

export {
  getMetaMask,
  getAccountDetails,
  getChainId,
  getNetworkName,
  readContractFunction,
  writeContractFunction,
  investNow,
  checkBalance,
  getProtonCalulate,
};
