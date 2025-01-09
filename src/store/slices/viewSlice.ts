import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ViewState {
  currentView: "templateList" | "livePreview";
  selectedTemplateId: string | null;
}

const initialState: ViewState = {
  currentView: "templateList",
  selectedTemplateId: null,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    switchToLivePreview(state, action: PayloadAction<string>) {
      state.currentView = "livePreview";
      state.selectedTemplateId = action.payload;
    },
    switchToTemplateList(state) {
      state.currentView = "templateList";
      state.selectedTemplateId = null;
    },
  },
});

export const { switchToLivePreview, switchToTemplateList } = viewSlice.actions;
export default viewSlice.reducer;
