import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire_filter";
import EntireRooms from "./c-cpns/entire_rooms";
import EntirePagination from "./c-cpns/entire_pagination";
import * as actions from "@/store/modules/entire/actionsCreators";
import { useDispatch } from "react-redux";
import AppHeader from "@/components/app-header";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchEntireListDataAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <div className="header">
        <AppHeader />
      </div>
      <div className="filter">
        <EntireFilter />
      </div>
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
