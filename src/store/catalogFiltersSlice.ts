import type { SortOption } from "../types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CatalogFiltersState {
  selectedGender?: string;
  selectedSizes: number[];
  selectedTypes: string[];
  selectedBrands: string[];
  selectedPriceRanges: string[];
  sortBy: SortOption;
  page: number;
}

const initialState: CatalogFiltersState = {
  selectedGender: undefined,
  selectedSizes: [],
  selectedTypes: [],
  selectedBrands: [],
  selectedPriceRanges: [],
  sortBy: "popular",
  page: 1,
};

const CatalogFiltersSlice = createSlice({
  name: "catalogFilters",
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<string | undefined>) {
      state.selectedGender = action.payload;
      state.page = 1;
    },
    toggleSize(state, action: PayloadAction<number>) {
      const size = action.payload;
      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter((s) => s !== size);
      } else {
        state.selectedSizes.push(size);
      }
      state.page = 1;
    },

    toggleType(state, action: PayloadAction<string>) {
      const type = action.payload;
      if (state.selectedTypes.includes(type)) {
        state.selectedTypes = state.selectedTypes.filter((t) => t !== type);
      } else {
        state.selectedTypes.push(type);
      }
      state.page = 1;
    },
    toggleBrand(state, action: PayloadAction<string>) {
      const brand = action.payload;
      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== brand);
      } else {
        state.selectedBrands.push(brand);
      }
      state.page = 1;
    },
    togglePriceRange(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.selectedPriceRanges.includes(id)) {
        state.selectedPriceRanges = state.selectedPriceRanges.filter(
          (p) => p !== id,
        );
      } else {
        state.selectedPriceRanges.push(id);
      }
      state.page = 1;
    },
    setSort(state, action: PayloadAction<SortOption>) {
      state.sortBy = action.payload;
      state.page = 1;
    },

    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },

    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setGender,
  toggleSize,
  toggleType,
  toggleBrand,
  togglePriceRange,
  setSort,
  setPage,
  resetFilters,
} = CatalogFiltersSlice.actions;

export default CatalogFiltersSlice.reducer;
