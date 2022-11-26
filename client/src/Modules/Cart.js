export const addToCart = async (username, products) => {
  console.log('fuck you dimitris and rob')
  const response = await fetch('/carts', {
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, products})
  });
   const data = await response.json();
   return data[0];

};
export const getCart = async (username) => {
  console.log('fuck you dimitris and rob')

  const response = await fetch(`/carts/${username}`)
   const data = await response.json();
   return data[0];

};
export default {addToCart, getCart};
// const getProducts = async url => {
//   const response = await fetch(url);
//   const data = await response.json();
//   setData(data);
// };
