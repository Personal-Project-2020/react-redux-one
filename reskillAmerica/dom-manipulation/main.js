'use strict';
// getting all the elements by ID
const pageHeader = document.getElementById('page-header');
const mainHeader = document.getElementById('main-heading');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para4 = document.getElementById('para4');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const black = document.getElementById('black');
const btn = document.getElementById('btn');
const box1 = document.getElementsByClassName('card-body');

// Challenge TWO CHANGING THE HEADER
mainHeader.textContent = 'New DOM Layout';
mainHeader.className = 'bg-success';
// CHALLENGE THREE ADD TO PARAGRAPH

para1.textContent =
  ' The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
para2.textContent =
  'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

// ADD BUTTON HANDLER TO CLICK
btn.addEventListener('click', () => {
  para4.textContent =
    'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
});
// CHANGING BOX COLOR
const changeBoxColor = (boxClassName) => {
  let classes = [
    'bg-danger',
    'bg-primary',
    'bg-warning',
    'bg-success',
    'bg-dark',
  ];
  let list = document.getElementsByClassName(boxClassName);
  for (let i = 0; i < list.length; i++) {
    list[i].className = classes[0];
    list[i].className = classes[1];
    list[i].className = classes[2];
    list[i].className = classes[3];
    list[i].className = classes[4];
  }
};
changeBoxColor('card-body');
