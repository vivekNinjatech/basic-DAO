// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol"; // Missing import fixed

contract GovernanceToken is ERC20Permit {
    uint256 public maxSupply = 1_000_000 * 10**18; // More readable format

    constructor() 
    ERC20("Governance Token", "GOV")
    ERC20Permit("Governance Token") // Ensure this matches ERC20 name
    {
        _mint(msg.sender, maxSupply);
    }
}
