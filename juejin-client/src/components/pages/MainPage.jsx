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
import Header from "../common/Header";
// api
import { getCategories } from "../../fake-api";

const triggerHeight = 200;

export default function MainPage({ history, user, logout }) {
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
    });
  }, []);

  const handleSelectPrimaryTab = (e, id) => {
    setPrimaryTab(id);
  };

  const handleBottomTabChange = (newValue) => {
    setValue(newValue);
  };

  const MainTabs = ({ display }) => (
    <div
      className={clsx("main-tabs", trigger ? "sticky" : "tab-sticky")}
      style={{ display: display ? undefined : "none" }}
    >
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

  return (
    <React.Fragment>
      <Header
        trigger={trigger}
        history={history}
        user={user}
        showUser={true}
        logout={logout}
      />
      <MainTabs display={sortBy !== "history"} />
      <MainContent
        trigger={trigger}
        primaryTab={
          categories.length !== 0 &&
          categories.filter((tab) => tab.category_id === primaryTab)[0]
        }
        sortBy={sortBy}
        history={history}
        user={user}
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
          label="??????"
          icon={<StarsIcon className="bottom-icon" />}
          onClick={() => setSortBy("hot")}
        />
        <BottomNavigationAction
          label="??????"
          icon={<NewReleasesIcon className="bottom-icon" />}
          onClick={() => setSortBy("new")}
        />
        <BottomNavigationAction
          label="??????"
          icon={<HistoryIcon className="bottom-icon" />}
          onClick={() => setSortBy("history")}
        />
      </BottomNavigation>
    </React.Fragment>
  );
}
