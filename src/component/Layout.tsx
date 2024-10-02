import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import Embedded from '../topic/Embedded';
import NodeRed from '../topic/NodeRed';

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const styleBody: React.CSSProperties = {
  width: '100%',
};

function Layout() {
  return (
    <div style={style}>
      <div style={{ width: '1150px', height: '100%', display: 'flex' }}>
        <div>
          <Sidebar />
        </div>
        <div style={styleBody}>
          <Routes>
            <Route path="/Embedded-system-blog/Embedded" element={<Embedded />} />
            <Route path="/Embedded-system-blog/NodeRed" element={<NodeRed />} />
            <Route path="/" element={<Embedded />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
