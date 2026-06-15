// //Day 4 honework
// import { useState } from "react"; 

// function card(props){
//   return
//   <p>
//   {props.name} {props.hobby}</p>
// }

// function App(){
//   const[count,setCount]=usecase(0)
//   return(
//     <div>
//       <card name="Rakshya" />
//       <card hobby="Reading" />
//       <button onClick={() => setCount(count+1)}>Love</button>
//     </div>

//   )
// }
// export default App



import {useState} from 'react'   //imported usestate to use usestate function  
function App(){
const[count,setCount]=useState(0)   // usestate start at 0 and count and setcount are its var holdin 1 and updated value

return(
  <div>
      <h1> Count:{count} </h1>
          <button onClick={() => setCount(count+1)}>Add</button> {/**we used arrow function cuz this should run onlly when clciked in add */}
              <button onClick={() => setCount(count-1)}>Minus</button>
                </div>
                )
                }

 export default App


// Day3 :properties(props)
// function Greeting(props){         //props is the parameter here
//   return <p>Day 3 of {props.name} React {props.journey} </p>       //react creats obj called props and gives the value of name attribute
// }                                             //{} tells javaScript Xml that things inside it are JS

// function App(){
// return(
//   <div>
//     <Greeting name="Rakshya" journey="journey" />          {/** passing value of name attribute and self closing tag cuz it has no content insdie it */}
   
//   </div>
// )
// }
// export default App                      //makes app () function availabe to other files




// day 2 component
// function Greeting(){
//   return <h1>Namaste</h1>
// }

// function App(){
//   return(
//     <div>
//       <Greeting />   {/** we are passing above greeting function */}
//       <p>This is the day 3</p>
//     </div>
//   )
// }
// export default App














//  Day 1: component
// function App(){        // This is a Js function/component
//   return(
//     <div>               {/*every component must return only one parent element(div)*/}
//       <h1>Hello</h1>
//       <p>This is the Day 2 of learning React</p>    {/**This cmt is used for JSX */}
//     </div>
//   )                               /*  this is a multiline cmt in normal js*/
// }

// export default App    //makes the App function available to other app and main.jsx imports it 
                  