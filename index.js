import { ApiPromise, WsProvider } from '@polkadot/api';
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { Keyring } from '@polkadot/keyring';
// Construct
const wsProvider = new WsProvider('ws://127.0.0.1:9944');
const keyring = new Keyring({ type: 'sr25519' });

// create Alice based on the development seed

const api = await ApiPromise.create({
    provider: wsProvider
});

const alice = keyring.addFromUri('//Alice');
const bob = keyring.addFromUri('//Bob');

const order = await ApiPromise.create({
    types: {
        Order: {
            lender: 'AccountId',
            borrower: 'AccountId',
            fee: 'u64',
            token: 'Vec<u8>',
            due_date: 'u64',
            paid_type: 'u64'
        }
    }
});
const token_id = '0x1ce31238ae12e9487c504858c9e3064978920dfd09713594b80a6b1d1f061f85';
// create the message, actual signature and verify
const order1 = order.createType('Order', {
    lender: alice.address,
    fee: 100000000000,
    token: token_id,
    due_date: 1766287472,
    paid_type: 1
})
const order2 = order.createType('Order', {
    lender: alice.address,
    borrower: bob.address,
    fee: 100000000000,
    token: token_id,
    due_date: 1669817870,
    paid_type: 1
})
const message1 = stringToU8a(order1);
console.log(`Message ${u8aToHex(message1)}`);
const signature1 = alice.sign(message1);
console.log(`Signature1 ${u8aToHex(signature1)} `);

const message2 = stringToU8a(order2);
console.log(`Message ${u8aToHex(message2)}`);
const signature2 = bob.sign(message2);
console.log(`Signature2 ${u8aToHex(signature2)} `);