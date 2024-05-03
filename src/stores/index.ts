import { create } from "zustand";

interface StackType {}

interface PopupState {
	stack: StackType[];
	actions: {
		push: (item: StackType) => void;
		pop: () => void;
		splice: (target: StackType) => void;
	};
}

const usePopupStore = create<PopupState>((set, get) => ({
	stack: [],
	actions: {
		push: (item: StackType) => {},
		pop: () => {},
		splice: (target: StackType) => {},
	},
}));

export const usePopupActions = () => usePopupStore((store) => store.actions);
export const usePopupStack = () => usePopupStore((store) => store.stack);
export const getPopupState = () => usePopupStore.getState();
