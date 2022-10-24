pragma solidity >=0.5.0;

interface IAkitaswapV2Callee {
    function AkitaswapV2Call(
        address sender,
        uint amount0,
        uint amount1,
        bytes calldata data
    ) external;
}
