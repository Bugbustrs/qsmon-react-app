import measurementList from "../measurements/measurement_list";

function getKey()
{
  return Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16);
}

/*
generates a post request object from the state of the app
*/
function getPostObject(state)
{
    let result={};
let measurement_description={
    
};
}
export  {getKey,getPostObject}
