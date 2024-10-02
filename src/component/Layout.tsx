import React from 'react'
import Sidebar from './Sidebar';
import { Routes, Route,} from 'react-router-dom';
import Embedded from '../topic/Embedded';
import NodeRed from '../topic/NodeRed';
import Test from './Test';



const style:React.CSSProperties={
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center'
}
const styleBody:React.CSSProperties={
    width:'100%',
   
}

function Layout(){
  return (
    <div style={style}>
        <div style={{width:'1150px',height:'100%',display:'flex'}}>
            <div>
                <Sidebar/>
            </div>
            <div style={styleBody}>
                <Routes>
                    <Route path="/Embedded" element={<Embedded/>} />
                    <Route path="/NodeRed" element={<NodeRed/>} />
                    <Route path="/Test" element={<Test/>} />
                </Routes>
            </div>
        </div>
        
    </div>
  )
}

export default Layout

{/*  */}