// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DAOTreasury is Ownable {
    event FundsReleased(address indexed to, uint256 amount);
    event ERC20Released(address indexed token, address indexed to, uint256 amount);

    constructor(address initialOwner) Ownable(initialOwner) {}

    // Allow the contract to receive ETH
    receive() external payable {}

    function releaseFunds(address payable to, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        (bool success, ) = to.call{value: amount}("");
        require(success, "Transfer failed");
        emit FundsReleased(to, amount);
    }

    function releaseERC20(address token, address to, uint256 amount) external onlyOwner {
        IERC20(token).transfer(to, amount);
        emit ERC20Released(token, to, amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
