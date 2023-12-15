import React, { useState } from 'react';

const ResponsiveNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-bar">
        <TabButton index={0} activeTab={activeTab} onClick={handleTabClick}>
          Tab 1
        </TabButton>
        <TabButton index={1} activeTab={activeTab} onClick={handleTabClick}>
          Tab 2
        </TabButton>
        <TabButton index={2} activeTab={activeTab} onClick={handleTabClick}>
          Tab 3
        </TabButton>
      </div>

      <div className="tab-content">
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

const TabButton = ({ index, activeTab, onClick, children }) => {
  const isActive = index === activeTab;
  return (
    <button
      className={`tab-button ${isActive ? 'active' : ''}`}
      onClick={() => onClick(index)}
    >
      {children}
    </button>
  );
};

export default ResponsiveNav;
