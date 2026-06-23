// Day 11 : Create 3 pages of Home, About, Project && add a nav with all 3 links
// and one project page show list of 3 project using .map() with fake data and
// on about page show ur name age and hobby using props.

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Home(){
    return <h1>Home page</h1>
}
function About(props){
    return(
        <div>
            <h1>{props.name} {props.age} {props.hobby}</h1>
        </div>
    )
}
function Project(){
    const project =[
        {id:1, name: "Computer" , description:"A computer is an electronic machine that takes data as input, processes it, and gives the result as output. It works according to instructions (programs) given by the user and performs calculations, data analysis, file management, graphic design, internet browsing, and many other tasks quickly and accurately"},
        {id:2, name: "Science" , description:"Science is a way of discovering what's in the universe and how those things work today, how they worked in the past, and how they are likely to work in the future. Scientists are motivated by the thrill of seeing or figuring out something that no one has before."},
        {id:3, name: "Math" , description:"Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions."}
    ]
    return(
        <div>
           <h1>Project list:</h1>
           <ul>
            {project.map((project,i)=>(
                <li key={project.id}>{project.name} {project.description}</li>
            ))}
           </ul>

        </div>
    )
}

function Homework(){

    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About </Link><br></br>
            <Link to="/project">Project </Link><br></br>
        </nav>
        

        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about"element={<About name="Ram" age="12" hobby="dance"/>}/>
            <Route path="/project" element={<Project/>}/>

        
        </Routes>
        </BrowserRouter>



    )
}

export default Homework