import { atom } from "recoil";
import { withNamespace } from "../utils";
import { FirebaseApp } from "firebase/app";
import { AppTheme } from "../constants";

export const themeState = atom<AppTheme>({
	key: withNamespace("theme"),
	default: AppTheme.Dark,
});

export const mapCenterState = atom<unknown>({
	key: withNamespace("mapCenter"),
	default: null,
});

export const firebaseAppState = atom<FirebaseApp | null>({
	key: withNamespace("firebaseApp"),
	default: null,
});
