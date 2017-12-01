import axios from 'axios';

export default {

  getSavedStocks: () => {
    return axios.get('/api/stock');
  },

  removeStock: id => {
    return axios.delete('/api/stock/' + id)
  }

};

