// Component : ClientAssest.js
//- - - - - - - - - - - - - - - - - -
  
  
import ClientAssestServices from './services/ClientAssestServices';
import ClientAssestHelpers from './services/ClientAssestHelpers';
import ClientAssetsTable from './Component/ClientAssetsTable';


class ClientAssets extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    loading: true,
    error: false,
    clientAssets : []
  };
}

componentDidUpdate(){
  this.loadAssets();
}


loadAssets = () =>{

  let params = {
    region: 'us-west'
  }

  this.setState({loading: true});
  ClientAssestServices.getClientAssets(params).then(res => {
		this.setState({clientAssets:ClientAssestHelpers.formatData(res)});
  })
  .catch((errorResponse)=>{
  	this.setState({clientAssets:ClientAssestHelpers.formatError(err)});   
	})
  .finally(() => {
    this.setState({loading: false});
  })
}
  
  render() {
    let { loading, error, clientAssets }  = this.state;
    return (
      <div>
      
        {/* display a loading bar when the data is pending */}
        {
          loading && (
            <div>
              loading...
            </div>
          )
        }
        {/* display Error */}
        {
          error && (
            <div>
              Error!
            </div> 
          )
        }
        {/* Display client assets data */}
        <ClientAssetsTable clientAssets = {clientAssets} />
      </div>
    )
  }
}