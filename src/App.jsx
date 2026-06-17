// Day 6 : using list and .map()
import Card from "./Card.jsx"
function App(){
    const fruit = ['Apple','Mango','orange']  //we made an array
    return (
        <div>
            <Card/>
            <h1>Fruits List</h1>
            <ul>
                {fruit.map((fruit,index) => (   /**map() is a js function that loops thru every item and fruit is current item value*/
                    <li key ={index}> {fruit} </li>
                ) )}
            </ul>

        </div>

    )
}

export default App















// Day 5 home work
// import { useState } from 'react'
// function Card(props){
//     return(
//         <div>
//             <h1>{props.Sport}</h1>
//         </div>
//     )
// }
// function App(){
// const[count,setCount]=useState(0)

// return(
//     <div>
//         <Card Sport= 'Football' />
//         <h2>Like:{count}</h2>
//         <button onClick={() => setCount(count+1)}>Like</button>
//         <button onClick={() => setCount(count-1)}>Dislike</button>
//         { count>20 ? (<h3>Popular</h3>) : (<h3>Not popular</h3>)}
//     </div>
// )
// }
// export default App



// // Day 5: conditional Rendering
// import { useState } from 'react'
// function App(){
// const[isloggedIn, setloggedIn]=useState(false) //the start valiue is false

// return(
//     <div>
//     {isloggedIn? (<h1>Welcome</h1> ) : ( <h1>Please login</h1>)}
//     <button onClick={() => setloggedIn(!isloggedIn)}>
//         {isloggedIn ? 'logout':'Login'}
//         </button>
//     </div>

//     )
// }
// export default App






// // a card function with a clcik button of love
// import { useState } from 'react'
// function Card(props){
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.hobby}</p>
//         </div>
//     )
    
// }
// function App(){
//     const[like,setLike]=useState(0)
//     return(
//             <div>
//             <Card name="Rakshya" hobby="dance" />
//             <h1>Like: {like}</h1>
//             <button onClick={() => setLike(like +1)}>Love</button>
//             </div>
//     )
// }
// export default App


















// import {useState} from 'react'   //imported usestate to use usestate function  
// function App(){
// const[count,setCount]=useState(0)   // usestate start at 0 and count and setcount are its var holdin 1 and updated value

// return(
//   <div>
//       <h1> Count:{count} </h1>
//           <button onClick={() => setCount(count+1)}>Add</button> {/**we used arrow function cuz this should run onlly when clciked in add */}
//               <button onClick={() => setCount(count-1)}>Minus</button>
//                 </div>
//                 )
//                 }

//  export default App


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
                  