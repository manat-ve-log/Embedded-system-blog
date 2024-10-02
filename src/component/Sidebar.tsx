import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { useEffect, useState } from 'react';

function Sidebar() {
  const location = useLocation();
  const [selected, setSelected] = useState<string>(location.pathname);

  useEffect(() => {
    if (!selected && location.pathname === "/NodeRed") {
      setSelected('NodeRed');
    }
  }, [location.pathname, selected]);

  const handleSelect = (name:string) => {
    setSelected(name);
    console.log(location)
  };

  const selectedStyle = {
    background: '#D32E2E',
    color: 'white',
  };

  return (
    <div className="container">
      <div className='title-sidebar'>Title</div>
      <Link
        className="linkto topic"
        style={selected === '/Embedded' ? selectedStyle : {}}
        to="/Embedded"
        onClick={() => handleSelect('/Embedded')}
      >
        Embedded
      </Link>

      <Link
        className="linkto topic"
        style={selected === '/RaspberryPi' ? selectedStyle : {}}
        to="/RaspberryPi"
        onClick={() => handleSelect('/RaspberryPi')}
      >
        RaspberryPi
      </Link>

      <Link
        className="linkto topic"
        style={selected === '/NodeRed' ? selectedStyle : {}}
        to="/NodeRed"
        onClick={() => handleSelect('/NodeRed')}
      >
        Node-red
      </Link>

      <Link
        className="linkto topic"
        style={selected === '/Test' ? selectedStyle : {}}
        to="/Test"
        onClick={() => handleSelect('/Test')}
      >
        Test
      </Link>
    </div>
  );
}

export default Sidebar;
