import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InteractionsState {
  isEditorPanelCollapsed: boolean;
}

const initialState: InteractionsState = {
  isEditorPanelCollapsed: false,
};

const interactionsSlice = createSlice({
  name: "interactions",
  initialState,
  reducers: {
    toggleEditorPanel: (state) => {
      state.isEditorPanelCollapsed = !state.isEditorPanelCollapsed;
    },
    setEditorPanelCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isEditorPanelCollapsed = action.payload;
    },
  },
});

export const { toggleEditorPanel, setEditorPanelCollapsed } =
  interactionsSlice.actions;

export default interactionsSlice.reducer;
