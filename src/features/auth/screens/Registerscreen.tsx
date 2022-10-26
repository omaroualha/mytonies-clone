import React, { FC } from "react";
import { ModalWrapper, Webview } from "@/components";

export const RegisterScreen: FC = () => {
  const url =
    "https://login.tonies.com/auth/realms/tonies/protocol/openid-connect/registrations?client_id=tonie-studio&kc_locale=en&redirect_uri=com.tonies.app%3A%2Foauthredirect&response_type=code&scope=openid+email+profile&webview=app&utm_source=app&cookieConsent=16";
  return (
    <ModalWrapper>
      <Webview url={url} title="tonies® - Create your Tonies-Account" />
    </ModalWrapper>
  );
};
