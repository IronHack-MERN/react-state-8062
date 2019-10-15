import React, { Component } from 'react';

const numbers = [1,2,3,4,5,6,7,8,9];

// export const listItems = [
//     <li>1</li>,
//     <li>2</li>,
//     <li>3</li>,
//     <li>4</li>,
//     <li>5</li>,
//     <li>6</li>,
//     <li>7</li>,
//     <li>8</li>,
//     <li>9</li>,
// ]

// export const listItems = numbers.map(oneNumber => <li>{oneNumber}</li>);

// Para prevenir el error:
// Warning: Each child in a list should have a unique "key" prop,
// añadimos la key a cada elemento
export const listItems = numbers.map( (oneNumber, index) => 
    <li key={index}>{oneNumber}</li>
);