// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft/IERC20Permit.sol";
contract GovernanceToken is ERC20Votes {
    uint256 public s_maxSupply = 1_000_000 * 10**18; // More readable format

    constructor()
        ERC20("GovernanceToken", "GT")
        ERC20Votes()
    {
        _mint(msg.sender, s_maxSupply);
    }

    // The functions below are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20) { // ✅ Override from ERC20, not ERC20Votes
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20) { // ✅ Override from ERC20
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20) // ✅ Override from ERC20
    {
        super._burn(account, amount);
    }
}
