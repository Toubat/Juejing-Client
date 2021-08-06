import React, { useState, useEffect } from "react";
import InfiniteScrollList from "./InfiniteScrollList";
import TabItem from "./TabItem.jsx";

export default function MainContent({
  trigger,
  primaryTab,
  sortBy,
  history,
  user,
}) {
  const [secondaryTab, setSecondaryTab] = useState(null);

  useEffect(() => {
    if (primaryTab.children) {
      setSecondaryTab(primaryTab.children[0].category_id);
    } else {
      setSecondaryTab(null);
    }
  }, [primaryTab]);

  const handleSelectSecondaryTab = (id) => {
    setSecondaryTab(id);
  };

  return (
    <React.Fragment>
      <div className="main-content">
        <div
          className="secondary-tabs"
          style={{
            borderRadius: 15,
            display: sortBy === "history" ? "none" : undefined,
          }}
        >
          <div className="tab-container">
            {primaryTab.children ? (
              primaryTab.children.map((tab, i) => (
                <TabItem
                  key={`${tab}-${i}`}
                  name={tab.category_name}
                  selected={secondaryTab === tab.category_id}
                  onSelected={() => handleSelectSecondaryTab(tab.category_id)}
                />
              ))
            ) : (
              <TabItem name={primaryTab.category_name} selected={true} />
            )}
          </div>
        </div>

        <InfiniteScrollList
          primaryCategory={primaryTab.category_id}
          secondaryCategory={secondaryTab}
          sortBy={sortBy}
          history={history}
          user={user}
        />
      </div>
    </React.Fragment>
  );
}
