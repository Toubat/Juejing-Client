import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  useScrollTrigger,
} from "@material-ui/core";
import StarsIcon from "@material-ui/icons/Stars";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import HistoryIcon from "@material-ui/icons/History";
import clsx from "clsx";
// local component
import MainContent from "../common/MainContent";

const tabs = [
  { name: "推荐", link: "/" },
  { name: "前端", link: "/" },
  { name: "后端", link: "/" },
];

const triggerHeight = 200;

export default function MainPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(0);

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: triggerHeight,
  });

  const handleSelectTab = (e, newValue) => {
    setSelectedTab(newValue);
  };

  const handleBottomTabChange = (newValue) => {
    setValue(newValue);
  };

  const MainTabs = () => (
    <div className={clsx("main-tabs", trigger ? "sticky" : "tab-sticky")}>
      {tabs.map((tab, i) => (
        <React.Fragment key={`${tab}-${i}`}>
          <div
            className="link-container"
            style={{
              borderRight:
                i === tabs.length - 1 ? undefined : "1px solid white",
            }}
          >
            <p
              className={`link ${selectedTab === i && "link-selected"}`}
              onClick={(e) => handleSelectTab(e, i)}
            >
              {tab.name}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );

  const Header = () => (
    <header className={clsx("main-header", !trigger && "sticky")}>
      <div className="header-logo">
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
          alt="掘金标志"
        />
        <h2 style={{ textAlign: "center", margin: 0, marginLeft: "0.8rem" }}>
          掘金
        </h2>
      </div>
      <div className="header-avatar">
        <div className="avatar">BY</div>
      </div>
    </header>
  );

  return (
    <React.Fragment>
      <Header />
      <MainTabs />
      <MainContent posts={posts} trigger={trigger} />
      <BottomNavigation
        value={value}
        onChange={(e, newVal) => handleBottomTabChange(newVal)}
        showLabels
        style={{ position: "sticky", bottom: 0, background: "#2f3542" }}
      >
        <BottomNavigationAction
          label="热门"
          icon={<StarsIcon className="bottom-icon" />}
        />
        <BottomNavigationAction
          label="最新"
          icon={<NewReleasesIcon className="bottom-icon" />}
        />
        <BottomNavigationAction
          label="历史"
          icon={<HistoryIcon className="bottom-icon" />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
}
