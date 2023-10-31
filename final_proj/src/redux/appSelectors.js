import { createSelector } from "@reduxjs/toolkit";





export const getCategories = (state) => state.costs.categories;

export const getExpenses = (state) => state.expenses.expenses;

export const getFilterType = createSelector(
    getExpenses,
    (state) => state.filterType
)