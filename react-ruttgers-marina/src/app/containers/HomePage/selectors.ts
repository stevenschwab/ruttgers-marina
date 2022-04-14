import { createSelector } from 'reselect';
import { IRootAppState } from '../../../typings';

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopBoats = createSelector(
    selectHomePage, 
    (homePage) => homePage.topBoats
);