import { useRecoilValue } from "recoil";
import { themeState } from "./shared/state";
import { Routes } from "./pages";
import { MainMenu } from "./components";

import styles from "./App.module.scss";
// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "./shared/constants/general";

function App() {
  const theme = useRecoilValue(themeState);
  // const [firebaseApp, setFirebaseApp] = useRecoilState(firebaseAppState);

	// React.useEffect(() => {
  //   if (!firebaseApp) {
  //     const app = initializeApp(firebaseConfig);

  //     setFirebaseApp(app);
  //   }
  // }, [firebaseApp, setFirebaseApp]);

	return (
		<main className={`${styles.appContainer} ${styles[theme]}`}>
			<MainMenu />

			<div className={styles.pageContainer}>
				<Routes />
			</div>
		</main>
	);
}

export default App;
