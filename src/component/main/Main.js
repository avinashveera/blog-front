import React from 'react'

const Main = () => {

const style={

  main:{margin:"50px 0px"},
  search:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},
  searchinput:{width:"200px",height:"20px"}
}



  return (
    

  <div style={style.main}>

  
  <div style={style.search}>
    <input style={style.searchinput} type="text" ></input><i class="fa-duotone fa-magnifying-glass"></i>
  </div>

  </div>



  )
}

export default Main