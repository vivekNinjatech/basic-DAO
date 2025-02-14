// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract GovernanceToken is ERC20Votes, ERC20Permit {
    uint256 public immutable s_maxSupply;

    constructor()
        ERC20("GovernanceToken", "GT")
        ERC20Permit("GovernanceToken")
    {
        s_maxSupply = 1_000_000 * 10 ** 18;
        _mint(msg.sender, s_maxSupply);
    }

    // ✅ Must override `_update` because both ERC20 and ERC20Votes define it
    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Votes) {
        super._update(from, to, value);
    }

    function nonces(
        address owner
    ) public view override(Nonces, ERC20Permit) returns (uint256) {
        return super.nonces(owner);
    }

    // ✅ `_mint` and `_burn` should only override ERC20, not ERC20Votes
    function _mint(address to, uint256 amount) internal override(ERC20) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20) {
        super._burn(account, amount);
    }
}