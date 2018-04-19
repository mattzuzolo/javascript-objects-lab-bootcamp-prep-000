var recipes = {
  
};


// function updateObjectWithKeyAndValue (obj, key, value) {
  
  
//   return Object.assign( {}, { [key]: value}   );
  
// }


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}