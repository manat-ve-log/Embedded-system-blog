import React, { ReactNode } from 'react';

// Hook to get the window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
interface CardProps{
  code?:string|ReactNode,
  size?: any,
  margin?:string,
  children?: ReactNode;
}

const Codebox:React.FC<CardProps> = ({code,size,margin='5px',children}) => {
  const {width} = useWindowSize();
  const styleCard: React.CSSProperties = {
    width: 'auto',
    boxSizing: 'border-box',
    padding:'10px',
    whiteSpace: 'pre-wrap',
  };
  const container: React.CSSProperties = {
    display:'flex',
    position:'relative',
    width: size||width <= 768 ? '90%' : '90%',
    margin: ` ${margin} auto`, //` ${margin}`
    borderLeft:'3px solid #8400F0', 
    borderRadius:'10px',
    background:"#f9ccff82"
  };

  return (
    <div style={container}>
      <div style={styleCard}>
        {children}
      </div>
    </div>
  );
};

export default Codebox;
