export const ADD_CRYPTO = 'ADD_CRYPTO'

let nextCryptoId = 0;

export function addCrypto(cryptoName) {
  return {
    type: ADD_CRYPTO,
    id: nextCryptoId++,
    cryptoName
  }
}
