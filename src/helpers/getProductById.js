


export const getProductById = ( _id, dataFromApi ) => {

    return dataFromApi.find( product => product._id === _id );
}