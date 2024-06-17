import projects from '../../data/projects.json';
import React from 'react';

export function Next(){

  let next = document.getElement

  next.addEventListener('click', function(event){
    event.stopPropagation();
    let items = document.querySelectorAll('.slide-item');
    document.querySelectorAll('.slide').appendCh(items[0])
  });

}
