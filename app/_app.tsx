// /app/pages/_app.tsx

import { useEffect } from "react";
import { useRouter } from "next/router"; 
import RootLayout from "./(home)/layout"; 

interface AppProps {
  Component: React.ComponentType<any>;
   pageProps: any; 
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginPage = router.pathname === "/login";
  const isSignupPage = router.pathname === "/signup";

  const getLayout = (pathname: string) => {
    if (isLoginPage || isSignupPage) {
      return <Component {...pageProps} />;
    } else {
      return (
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      );
    }
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);


  return getLayout(router.pathname);
}

export default App;
