//Service : ClientAssestServices
//- - - - - - - - - - - - - - - - - -


import axiosInstance from '../../services/interceptor.service';

const ClientAssestServices = {
  getClientAssets
};

function getClientAssets(params) {
  return axiosInstance.get('/api/client-assets', {params: params});
}
