import React, { useState } from 'react';
import './Tabs.css';

const TabNames = [
    { title: "Tab 1", component: () => (<div>Tab 1</div>), id: 1 },
    { title: "Tab 2", component: () => (<div>Tab 2</div>), id: 2 },
    { title: "Tab 3", component: () => (<div>Tab 3</div>), id: 3 },
]

export default () => {
    const [activeTab, setactiveTab] = useState(TabNames[0]);
    const ActiveComponent = activeTab.component;
    return (
        <div className="Background">
            <div>
                <div className="TabsContainer">
                    {
                        TabNames.map((item) => {
                            return (
                                <div className={`${activeTab.id === item.id ? "ActiveTab" : ""} TabButton`}
                                    style={{ width: `${100 / TabNames.length}%` }}
                                    onClick={() => {
                                        setactiveTab(item);
                                    }}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className = "TabsWrapper">
                    <div className="TabsContent">
                        <ActiveComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}