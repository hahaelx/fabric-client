# copy metadata 


cd metadata
## 使用者公鑰

cp ../../hyperledger-fabric-trainin/test-network/crypto/crypto-config/peerOrganizations/org1.cathaybc.com/users/Admin@org1.cathaybc.com/msp/signcerts/Admin@org1.cathaybc.com-cert.pem .

## 使用者私鑰
cp ../../hyperledger-fabric-trainin/test-network/crypto/crypto-config/peerOrganizations/org1.cathaybc.com/users/Admin@org1.cathaybc.com/msp/keystore/priv_sk .
## connection file
cp ../../hyperledger-fabric-trainin/test-network/crypto/crypto-config/peerOrganizations/org1.cathaybc.com/connection-org1.json .


# npm i
# npm run dev