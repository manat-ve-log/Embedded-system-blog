// import React from 'react'
import Codebox from './component/codebox'
import Cardimgx from './component/cardimgx'
import node01 from './Image/Node-red/installNodeRed01.png'
import node02 from './Image/Node-red/installNodeRed02.png'
import node03 from './Image/Node-red/node_red_a01.png'
import node04 from './Image/Node-red/node_red_a02a.png'
import node05 from './Image/Node-red/node_red_a02b.png'
import node06 from './Image/Node-red/node_red_a03.png'
// import node07 from './Image/Node-red/node_red_a03b.png'
import node08 from './Image/Node-red/node-red/Screenshot 2024-07-18 192328.png'
import node09 from './Image/Node-red/node-red/Screenshot 2024-07-19 093506.png'
import node10 from './Image/Node-red/node-red/Cur.png'
import node10DHT22 from './Image/Node-red/node-red/DHT22_01.png'
import DHT22_Set from './Image/Node-red/node-red/set_DHT22.webp'
import DHT22_Deploy from './Image/Node-red/node-red/Deploy_DHT22.png'
function NodeRed() {
  const code01 = `sudo apt update 
sudo apt full-upgrade`
  return (
    
    <div style={{lineHeight: 1.8 ,width:'100%'}}>  
      <h1>Get start</h1>
      <hr />
      <br />
      <div style={{lineHeight: 1.8}}>
        <h2>1.Install in raspberry pi</h2>
        <p style={{textIndent: '50px'}}>Get the latest system’s package list onto our Raspberry Pi</p>
        <Codebox>{code01}</Codebox>
        <Cardimgx img={node01}></Cardimgx>
        <br />
        <p style={{textIndent:'50px'}}>Install Node-RED. To do this, enter the following script in the terminal:</p>
        <Codebox>{`bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)`}</Codebox>
        <Cardimgx img={node02}></Cardimgx>
        {/* <Codebox>{`node-red-start`}</Codebox> */}
      </div>
      <br />
      <div style={{lineHeight: 1.8}}>
        <h2>Start Node-red</h2>
        <p style={{textIndent:'50px'}}>Open node-red</p>
        <Cardimgx img={node03}></Cardimgx>
        <br />
        <p style={{textIndent:'50px'}}>OR open terminal</p>
        <Codebox>{`node-red-start`}</Codebox>
        <Cardimgx img={node04}></Cardimgx>
        <br />
        <p style={{textIndent:'50px'}}>copy url</p>
        <Cardimgx img={node05}></Cardimgx>
        <br />
        <p style={{textIndent:'50px'}}>Open url</p>
        <Cardimgx img={node06}></Cardimgx>
      </div>

      <div style={{marginTop:'50px',lineHeight: 1.8}}>
        <h2>Test Node-red</h2>
        <hr />
        <h3> 1.Node-RED เพื่อควบคุมสวิตซ์กดแบบ กดติด กดดับ </h3>
        <p> -- ต่อวงจรตามรูป </p>
        <Cardimgx img={node10}></Cardimgx>
        <p> -- ต่อ node-red </p>
        <Cardimgx img={node08}></Cardimgx>
        <p> -- รับ Input จาก Pi pin 36 </p>
        <p> -- ส่ง OutPut ไป Pi pin 32 </p>
        <p> -- ใช้ Function รูป</p>
        <Cardimgx img={node09}></Cardimgx>
        <p> -- ลองการทำงาน</p>
      </div>
        <div style={{marginTop:'50px'}}>
          <h3> 2. Node-RED เพื่ออ่าน DHT-22 Sensor </h3>
          <h4>Install DHT-22 </h4>
          <p>1. Installing this node requires three steps:
            <p style={{textIndent:'70px'}}>Install the BCM2835 library from here.</p>
            <p style={{textIndent:'70px'}}>Install the node-dht-sensor dependency </p>
          </p>
          <Codebox>{`sudo npm install --unsafe-perm -g node-dht-sensor`}</Codebox>
          <p>2.Install this node</p>
          <Codebox>{`sudo npm install --unsafe-perm -g node-red-contrib-dht-sensor`}</Codebox>
          <p>Reboot system</p>
          <Codebox>{`sudo reboot`}</Codebox>
          <br />
          <h4>Test DHT22</h4>
          <Cardimgx img={node10DHT22}></Cardimgx>
          <p>-- setting</p>
          <Cardimgx img={DHT22_Set}></Cardimgx>
          <p><h5>Deploy</h5></p>
          <Cardimgx img={DHT22_Deploy}></Cardimgx>
        </div>
    </div>
  )
}

export default NodeRed