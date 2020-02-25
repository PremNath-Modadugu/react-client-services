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
 
funtion formatData(clientData) {
	if (clientData.status === 200){
  	return clientData.data;
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