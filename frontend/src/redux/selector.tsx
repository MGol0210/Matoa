import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const homeSelector = (state: RootState) =>  state.products;
