import React, { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";
import deDe from "antd/lib/locale/de_DE";
import enUS from "antd/lib/locale/en_US";
import GlobalStyle from "./styles/GlobalStyle";
import "typeface-montserrat";
import "typeface-lato";
import { useLanguage } from "./hooks/useLanguage";
import { useThemeWatcher } from "./hooks/useThemeWatcher";
import { useAppSelector } from "./hooks/reduxHooks";
import { themeObject } from "./styles/themes/themeVariables";

import './i18n';

const App: React.FC = ({ children }: PropsWithChildren) => {
  const { language } = useLanguage();
  const theme = useAppSelector((state: any) => state.theme.theme);

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider locale={language === "en" ? enUS : deDe}>
          {children}
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;
