import request from "../request";

export const getData = () => request.get('https://fakestoreapi.com/products');
