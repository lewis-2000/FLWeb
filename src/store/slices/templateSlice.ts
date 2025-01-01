import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemplateState {
  selectedTemplateId: string | null;
  currentView: "templateList" | "livePreview";
}

const initialState: TemplateState = {
  selectedTemplateId: null,
  currentView: "templateList",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    selectTemplate(state, action: PayloadAction<string>) {
      state.selectedTemplateId = action.payload;
      state.currentView = "livePreview";
    },
    backToList(state) {
      state.selectedTemplateId = null;
      state.currentView = "templateList";
    },
  },
});

export const { selectTemplate, backToList } = templateSlice.actions;
export default templateSlice.reducer;
