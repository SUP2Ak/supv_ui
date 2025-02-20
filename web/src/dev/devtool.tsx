import { useState } from 'react';
import { Drawer, Tooltip } from './components';
//import { 

//} from './features';
import './devtool.css';

const FEATURES = {

}

function DevTool() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
  const [currentVisible, setCurrentVisible] = useState<string>('');

  // const handleVisible = (name: string, wantClose: boolean = true) => {
  //   if (!FEATURES[name as keyof typeof FEATURES]) return;
  //   if (FEATURES[currentVisible as keyof typeof FEATURES]) {
  //     FEATURES[currentVisible as keyof typeof FEATURES](false)
  //     setCurrentVisible('')
  //   } 
  //   if (FEATURES[name as keyof typeof FEATURES] && currentVisible !== name) {
  //     FEATURES[name as keyof typeof FEATURES](true)
  //     setCurrentVisible(name)
  //   }

  //   setIsDrawerOpen(wantClose ? false : true)
  // }

  return (
    <div className="devtool">
      <Drawer
        isOpen={isDrawerOpen}
        position={drawerPosition}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="drawer-header">
          <h2>Dev Tools</h2>
          <div className="drawer-controls">
            <button
              className="position-toggle"
              onClick={() => setDrawerPosition(drawerPosition === 'left' ? 'right' : 'left')}
            >
              <span className="position-icon">{drawerPosition === 'left' ? '⇥' : '⇤'}</span>
              <span className="position-tooltip">
                {drawerPosition === 'left' ? 'Déplacer à droite' : 'Déplacer à gauche'}
              </span>
            </button>
          </div>
        </div>
        <div className="drawer-content">
          <button onClick={() => {}}>
            <span className="">👤</span>
            <span>??</span>
          </button>
          <button onClick={() => {}}>
            <span className="feature-icon">👤</span>
            <span>??</span>
          </button>
        </div>
      </Drawer>
      <Tooltip onClick={() => setIsDrawerOpen(!isDrawerOpen)} status={isDrawerOpen ? 'Close' : 'Open'} />
    </div>
  );
};

export default DevTool;