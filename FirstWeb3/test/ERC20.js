const { expect } = require("chai");
const { ethers } = require("hardhat");
const {Contract} = require('ethers');
const BigNumber = require('bignumber.js');
const web3 = require("web3");

describe("ERC20 TOKEN TESTING", async function () {
	let erc20;
	beforeEach(async () => {
		let dep = await ethers.getContractFactory("MyToken");
		erc20 = await dep.deploy("First Token","FTK");
		//console.log(erc20.address);
	});

  it("Checking ERC20 Token Name", async function () {
    expect(await erc20.name()).to.equal("First Token");
  });

  it("Checking ERC20 Token Symbol", async function () {
    expect(await erc20.symbol()).to.equal("FTK");
  });

  it("Checking ERC20 Token Decimals", async function () {
    expect(await erc20.decimals()).to.equal(18);
  });

  it("Checking ERC20 Owner Balance", async function () {
  	var owner = await ethers.getSigners();
    expect(await erc20.balanceOf(owner[0]["address"])).to.equal(1000);
  });


  it("Checking ERC20 Transfer Function", async function () {
  	var accounts = await ethers.getSigners();
  	await erc20.transfer(accounts[1]["address"],1000);
  	await erc20.connect(accounts[1]).transfer(accounts[2]["address"],100)
    expect(await erc20.balanceOf(accounts[2]["address"])).to.equal(100);
  });


  it("Checking ERC20 Minting Function", async function () {
  	var accounts = await ethers.getSigners();
  	await erc20.mint(accounts[1]["address"],5000);
  	expect(await erc20.balanceOf(accounts[1]["address"])).to.equal(5000);
  });


  it("Checking ERC20 Minting Function With NonOwner", async function () {
  	var accounts = await ethers.getSigners();
  	await expect(
  		erc20.connect(
  			accounts[1]).mint(
  			accounts[1]["address"],
  			5000)
  		).to.reverted;
  });







});