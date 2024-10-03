import axios from 'axios';

export const returnPromise = (q, page) => {
return axios.get('https://pixabay.com/api/', {
    params: {
  key :"34668694-a67447f729748c64ab9ad3b4f",
    q,
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: '15',
    },
});
};
