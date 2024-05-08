import { create } from "zustand";

interface LocaleState {
	locale: string;
}

const useLocaleStore = create<LocaleState>((set, get) => ({
	locale: window.navigator.language,
}));
