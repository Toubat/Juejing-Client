import React, { useState } from "react";
import InfiniteScrollList from "./InfiniteScrollList";
import { Paper } from "@material-ui/core";

import clsx from "clsx";

export default function MainContent({ posts, trigger }) {
  return (
    <React.Fragment>
      <div className="main-content">
        <Paper className="secondary-tabs" style={{ borderRadius: 0 }}></Paper>
        <InfiniteScrollList />
      </div>
    </React.Fragment>
  );
}
