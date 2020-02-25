//ClientAssestHelpers.js
//- - - - - - - - - - - - - - - - - -

  let ClientAssestHelpers = {
  	formatData,
    formatError,
  };
  
/**
 * @function formatData
 * @description formats data 
 * @param clientData: {}
 * returns []
 */
 
function formatData(clientData){
	if (clientData && clientData.data){
    if ( clientData.data.items && Array.isArray(clientData.data.items)) {
      let data = [];
      data = clientData.data.map(item => {
        return {
          date: new Date("YYMMDD",item.timestamp),
          name: item.name,
          age: item.age,
          region: item.region,
          message: item.message,
          time: new Date("HHMMSS",item.timestamp)
        }
      })
      return data;
    }
  }
  return [];
}

/**
 * @function formatData
 * @description formats data 
 * @param clientData: {}
 * returns 
 */
function formatError(clientError) {

  if(clientError && clientError.message ) {
      return clientError.message.data;
  }
  return 'Unknown Error';
}