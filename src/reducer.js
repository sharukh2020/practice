let initialState={
    likes:0,
    dislikes:0
}

const Reducer=(prevState=initialState,action)=>{
  if(action.type==="LIKE_INCREMENT"){
      const updatedVal=prevState.likes+1
      return{...prevState,likes:updatedVal}
  }
  else if(action.type==="DISLIKE_INCREMENT"){
    const updatedVal=prevState.dislikes+1
    return{...prevState,dislikes:updatedVal}
  }
  else{
      return{...prevState}
  }
}

export default Reducer