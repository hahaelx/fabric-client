
import FabricClient from "./FabricClient"

(async () => {
  console.log('start')
  const fabricClient = new FabricClient()
  await fabricClient.connectNetwork()


  const queryResult = await fabricClient.queryChaincode('GetUser', ['1'])
  console.log(queryResult)
  // console.log('invokeChaincode: ')
  // const invokeResult = await fabricClient.invokeChaincode('CreateUser', ['5', 'EvanLee', 'evan3@g.com'])
  // console.log(invokeResult)

  // const queryResult2 = await fabricClient.queryChaincode('GetUser', ['4'])
  // console.log(queryResult2)

  // const queryResult3 = await fabricClient.queryChaincode('GetAllUsers', [])
  // console.log(queryResult3)

  console.log('closeNetwork')
  fabricClient.closeNetwork()
})();