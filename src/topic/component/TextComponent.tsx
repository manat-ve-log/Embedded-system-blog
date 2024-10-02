import React,{ReactNode}from 'react'
interface TextProps {
    text?:string;
    children?: ReactNode;
}
const TextComponent:React.FC<TextProps> = ({children}) =>{
  return (
    <div style={{textIndent: '50px'}}>
        {children}
    </div>
  )
}

export default TextComponent

// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;