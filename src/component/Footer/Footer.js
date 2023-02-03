import React from 'react'

const Footer = () => {

  const style={

    footer:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",padding:"5px",background:"#6610f2",color:"#fff"},
    footercol:{width:"33.333333333%", display:"flex", flexDirection:"column" ,justifyContent:"center",alignItems:"center"}

  }

  return (
    <footer>
  <div  style={style.footer}>

    <div style={style.footercol}>
      <h3>about</h3>
      <p>veera</p>
    </div>
    <div style={style.footercol}>
      <h3>services</h3>
      <p>job alert </p>
    </div>
    <div style={style.footercol}>
      <h3>contact us</h3>
      <p>anish </p>
    </div>
  </div>
</footer>

  )
}

export default Footer