// Bind data to an element

// There are 2 ways 
// 1. Using getElement method
// 2. Using QuerySelector method

// getElement methods:
// 1. document.getElementById -> get the first matched record
// ex: <h2 id="header">Anil kumar</h2>
// js - document.getElementById("header"); -> this will get element reference . On the element reference we can set/get attribute value .
// -> Attribute gives the appearence and behaviour to an  element

// document.getElementsByClassName -> it will return array of matched element by the class name.


// to work with js we required an event/action.
 // 1. on the page load  -> Onload
 // onload : onload is a js event it will loads after the HTML loaded into DOM 
 
 // .innerText- print html content as it is
//  ex:  document.getElementById("header").innerText = "<i>ABC</i>";
//       Ans: '<i>ABC</i>'
  // .innerHTML - print the formatted html content
//   ex: document.getElementById("header").innerHTML = "<i>ABC</i>";
//        Ans: '<i>ABC</i>'

 // 2. After load - Onclick, Onchange etc.