import {
  getDiscountData,
  getHighCostEffectiveData,
  getHignScoreData,
  getHotRecommendData,
  getWantToGodData,
  getPlusData
} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 网络请求 action
// export const fetchHomeDataAction = createAsyncThunk(
//   "fetchHomeData",
//   async () => {
//     const res = await getHighCostEffectiveData();
//     return res;
//   }
// );
export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { state, dispatch }) => {
    getHighCostEffectiveData().then((res) => {
      dispatch(changeHighCostEffectiveActoin(res));
    });
    getHignScoreData().then((res) => {
      dispatch(changeHighScoreAction(res));
    });
    getDiscountData().then((res) => {
      dispatch(changeDiscountAction(res));
    });
    getHotRecommendData().then((res) => {
      dispatch(changeHotRecommendtAction(res));
    });
    getWantToGodData().then((res) => {
      dispatch(changeWantToGoAction(res));
    });
    getPlusData().then((res) => {
      dispatch(changePlusAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    highCostEffective: {},
    highScore: {},
    discount: {},
    hotRecommend: {},
    wantToGo: {},
    plus: {}
  },
  reducers: {
    changeHighCostEffectiveActoin(state, { payload }) {
      state.highCostEffective = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScore = payload;
    },
    changeDiscountAction(state, { payload }) {
      state.discount = payload;
    },
    changeHotRecommendtAction(state, { payload }) {
      state.hotRecommend = payload;
    },
    changeWantToGoAction(state, { payload }) {
      state.wantToGo = payload;
    },
    changePlusAction(state, { payload }) {
      state.plus = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.highCostEffective = payload;
  //   });
  // },
});

export const {
  changeHighCostEffectiveActoin,
  changeHighScoreAction,
  changeDiscountAction,
  changeHotRecommendtAction,
  changeWantToGoAction,
  changePlusAction
} = homeSlice.actions;
export default homeSlice.reducer;
