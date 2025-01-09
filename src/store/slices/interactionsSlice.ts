import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InteractionsState {
  isEditorPanelCollapsed: boolean;
  editDone: boolean;
}

const initialState: InteractionsState = {
  isEditorPanelCollapsed: false,
  editDone: false, // New state to track edits
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
    setEditDone: (state, action: PayloadAction<boolean>) => {
      state.editDone = action.payload; // Toggle editDone flag
    },
  },
});

export const { toggleEditorPanel, setEditorPanelCollapsed, setEditDone } =
  interactionsSlice.actions;

export default interactionsSlice.reducer;
