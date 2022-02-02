// shouldcomponentupdate
// import React from 'react'

// class Child extends React.Component{
//   shouldComponentUpdate(nextProps,nextState){
//     console.warn("updation start in child",this.props.count)
//     console.warn(nextProps.count)
//     if(nextProps.count>5){
//       return true
//     }
//     else{
//       return false
//     }
//   }
//   componentDidUpdate(){
//     console.warn("updation done in child",this.props.count)
//   }
//   render(){
//     return(
//       <div>
//         <h4 style={{display:"inline-block",margin:"0px",textAlign:"center",marginRight:"10px"}}>{this.props.count}</h4>
//         <button onClick={()=>{
//             this.props.updateCount()
//           }}
//         >
//           Update Count
//         </button>
//       </div>
//     )
//   }
// }
// export default Child


// PureComponent

// import React from 'react'

// class Child extends React.PureComponent{
// render(){
//     console.warn("rendering happened")
//     return(
//       <div>
//         <h3>{this.props.count}</h3>
//         <button onClick={()=>{this.props.updateCount()}}>Update</button>
//       </div>
//     )
//   }
// }
// export default Child