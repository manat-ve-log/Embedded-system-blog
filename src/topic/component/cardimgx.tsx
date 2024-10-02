import React,{ ReactNode } from 'react'


interface imgx {
    img:string
    alt?:string
    children?: ReactNode;
}

const style:React.CSSProperties={
  display:'flex',
  flexDirection:'column',
  position:'relative',
  margin:'10px auto',
  width:'90%',
}

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',  // Maintain aspect ratio
  borderRadius: '8px', // Optional: add rounded corners
  boxShadow:'0 0 5px 2px #999999',
};

const cardimgx:React.FC<imgx>=({img,alt})=> {
  return (
    <div style={style}>
      <img src={img} alt={alt} style={imgStyle}/>
    </div>
  )
}
export default cardimgx;
