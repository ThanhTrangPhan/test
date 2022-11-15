
function AssetType(assetClass, data) {
    return { assetClass, data }
}

function Asset(tokenId, value) {
    return { tokenId, value };
}

function Order(maker, makeAsset, taker, takeAsset, salt, start, end, fee) {
    return { maker, makeAsset, taker, takeAsset, salt, start, end, fee };
}

const Types = {
    Asset: [
        { name: 'tokenId', type: 'bytes' },
        { name: 'value', type: 'uint256' }
    ],
    Order: [
        { name: 'maker', type: 'address' },
        { name: 'makeAsset', type: 'Asset' },
        { name: 'taker', type: 'address' },
        { name: 'takeAsset', type: 'Asset' },
        { name: 'salt', type: 'uint256' },
        { name: 'start', type: 'uint256' },
        { name: 'end', type: 'uint256' },
        { name: 'fee', type: 'uint256' },
    ]
};
const now = new Date().getTime()
const ZERO = '0x0000000000000000000000000000000000000000'
const left = Order(
    "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    Asset("0xc7a43f9a8b77e684638ec7775a7c37b9c278cf83534e5f9c44f06e7e7da8c18f", 1000000000000000000),
    ZERO,
    Asset("0xc7a43f9a8b77e684638ec7775a7c37b9c278cf83534e5f9c44f06e7e7da8c18f", 1000000000000000000),
    now,
    0,
    0,
    1000000000000000000
)

export { Order, left } 