
// Axios all methods


// import axios from 'axios'
// import React, { useState } from 'react'
// import classes from './App.module.css'

// function App(props){
//   let [cards,setCards]=useState([])

//   const getMethod=()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/posts`)
//     .then(res => {
//       const cards = res.data;
//       setCards([...cards]);
//     })
//   }

//   const postMethod=(e)=>{
//     e.preventDefault()
//     const data={
//                   "username":e.target.username.value,
//                   "password":e.target.password.value
//               }
//     axios.post('https://5e3a33558d7e1300149cd8d8.mockapi.io/posts',data)
//     .then(res =>{
//       console.log(res.data)
//     })
//   }

//   const putMethod=(e)=>{
//     e.preventDefault()
//     const data={
//                   "username":e.target.username.value
//               }
//     axios.put(`https://5e3a33558d7e1300149cd8d8.mockapi.io/posts/${e.target.password.value}`,data)
//     .then(res =>{
//       console.log(res.data)
//     })
//   }
//   const deleteMethod=(e)=>{
//     e.preventDefault()
//     axios.delete(`https://5e3a33558d7e1300149cd8d8.mockapi.io/posts/${e.target.password.value}`)
//     .then(res =>{
//       console.log(res.data)
//     })
//   }
//   return(
//     <div>
//       <button onClick={()=>{getMethod()}}>Get</button>
//       {
//         cards.map((item,pos)=>{
//          return(
//            <div key={pos} className={classes.Cards}>
//              {item.title}
//            </div>
//          )
//         })
//       }
//         <form onSubmit={(e)=>{postMethod(e)}}>
//             <input type="text" name="username" placeholder="Username"/>
//             <input type="password" name="password" placeholder="Password"/>
//             <input type="submit" value="Post" />
//         </form>

//         <form onSubmit={(e)=>{putMethod(e)}}>
//             <input type="text" name="username" placeholder="Username"/>
//             <input type="password" name="password" placeholder="Password"/>
//             <input type="submit" value="Put" />
//         </form>

//         <form onSubmit={(e)=>{deleteMethod(e)}}>
//             <input type="password" name="password" placeholder="Password"/>
//             <input type="submit" value="Delete"/>
//         </form> 
//     </div>
//   )
// }

// export default App


// Redux

// import React from 'react'
// import classes from './App.module.css'
// import {connect} from 'react-redux'

// function App(props){
//   return(
//     <div className={classes.App}>
//         <div>
//            <span>{props.likes}</span>
//            <button onClick={()=>{props.likeIncrement()}}>Like</button>
//         </div>
//         <div>
//            <span>{props.dislikes}</span>
//            <button onClick={()=>{props.dislikeIncrement()}}>Dislike</button>
//         </div>
//     </div>
//   )
// }

// const mapGlobalStateToProps=(globalStore)=>{
//   return{
//     likes:globalStore.likes,
//     dislikes:globalStore.dislikes
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     likeIncrement:()=>{dispatch({type:"LIKE_INCREMENT"})},
//     dislikeIncrement:()=>{dispatch({type:"DISLIKE_INCREMENT"})}
//   }
// }


// export default connect(mapGlobalStateToProps,mapDispatchToProps)(App)


// shouldcomponentupdate method nextProps and nextState

// import React from 'react'
// import Child from '../child'
// import classes from './App.module.css'

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0
//     }
//   }
//   updateCount=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   shouldComponentUpdate(){
//     console.warn("upadation start in parent",this.state.count)
//     return true
//   }
//   componentDidUpdate(){
//     console.warn("updation done in parent",this.state.count)
//   }
//   render(){
//     return(
//       <div>
//         <Child updateCount={this.updateCount} count={this.state.count}/>
//       </div>
//     )
//   }
// }
// export default App


// PureComponent

// import React, { Component } from 'react'
// import Child from '../child'

// class App extends Component{
//   constructor(props){
//   super(props)
//   this.state={
//   count:10
//   }
// }
// updateCount=()=>{
//       this.setState({count:10})
//     }
// render(){
//   return(
//     <div>
//       <Child updateCount={this.updateCount} count={this.state.count}/>
//     </div>
//   )
// }
// }

// export default App

import React from 'react'

function App(props){
    return(
        <div>
            Hello
        </div>
    )
}

export default App