import React, { useState, useEffect } from "react";
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
// api
import { getCategories } from "../../fake-api";

const triggerHeight = 200;

export default function MainPage({ history }) {
  const [primaryTab, setPrimaryTab] = useState(0);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("hot");
  const [value, setValue] = useState(0);

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: triggerHeight,
  });

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data.categories);
      console.log(res.data.categories);
    });
  }, []);

  const handleSelectPrimaryTab = (e, id) => {
    setPrimaryTab(id);
  };

  const handleBottomTabChange = (newValue) => {
    setValue(newValue);
  };

  const MainTabs = () => (
    <div className={clsx("main-tabs", trigger ? "sticky" : "tab-sticky")}>
      {categories.map((tab, i) => (
        <React.Fragment key={`${tab}-${i}`}>
          <div
            className="link-container"
            style={{
              borderRight:
                i === categories.length - 1 ? undefined : "1px solid white",
            }}
          >
            <p
              className={`link ${primaryTab === i && "link-selected"}`}
              onClick={(e) => handleSelectPrimaryTab(e, tab.category_id)}
            >
              {tab.category_name}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );

  const Header = () => (
    <header className={clsx("main-header", !trigger && "sticky")}>
      <div className="header-logo" onClick={() => history.push("/")}>
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
      <MainContent
        trigger={trigger}
        primaryTab={
          categories.length !== 0 &&
          categories.filter((tab) => tab.category_id === primaryTab)[0]
        }
        sortBy={sortBy}
      />
      <BottomNavigation
        value={value}
        onChange={(e, newVal) => handleBottomTabChange(newVal)}
        showLabels
        style={{
          position: "sticky",
          bottom: 0,
          background: "#2f3542",
          height: 60,
        }}
      >
        <BottomNavigationAction
          label="热门"
          icon={<StarsIcon className="bottom-icon" />}
          onClick={() => setSortBy("hot")}
        />
        <BottomNavigationAction
          label="最新"
          icon={<NewReleasesIcon className="bottom-icon" />}
          onClick={() => setSortBy("new")}
        />
        <BottomNavigationAction
          label="历史"
          icon={<HistoryIcon className="bottom-icon" />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
}
