export const addToCart = async (username, productItem) => {
  const response = await fetch('/carts', {
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, productItem})
  });
   const data = await response.json();
   console.log('fuck you dimitris and rob')
   return data;

};
export default {addToCart};
// const getProducts = async url => {
//   const response = await fetch(url);
//   const data = await response.json();
//   setData(data);
// };
