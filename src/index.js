import React from 'react';
import {createRoot} from 'react-dom/client';
import Main from './components/main';
import detail from './components/detail';
const rootElement = document.getElementById("root");
const Root = createRoot(rootElement);

Root.render(
  <Main/>
)

const new_detail = detail.map(function(x){
  return x.text.substring(0,5);
})

console.log(new_detail)