Component : ClientAssest.js
//- - - - - - - - - - - - - - - - - -
  
  
import ClientAssestServices from './services/ClientAssestServices';
import ClientAssestHelpers from './services/ClientAssestHelpers';

class ClientAssets extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    loading: false,
    error: false,
    clientAssets : []
  };
}


loadAssets = () =>{

  let params = {
  region: 'us-west'
  }

  ClientAssestServices.getClientAssets(params).then(
  res => {
  	/*
      if (res.status === 'ok'){
        return res.data
      }
    */
    
		this.setState({clientAssets:ClientAssestHelpers.formatData(res)});
  
  } 
  )
  .catch((errorResponse)=>{
  	this.setState({clientAssets:ClientAssestHelpers.formatError(err)});   
    
	}

}
  
  
  render() {
  return (
  <div>
  
  </div>
  
  )
  }
  
  }