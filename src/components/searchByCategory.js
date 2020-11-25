import React, { Component } from 'react';

export async class searchByCategory extends Component {
  constructor(){
    return new Promise((resolve) {
      const endPoint = "https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID";
      const fetchEndPoint = fetch(endPoint)
        .then((data) => data.json());
        resolve(fetchEndPoint);
    });
  }
}