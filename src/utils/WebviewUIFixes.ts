export const uiFixesApp = (): string => {
  const styles = `
    .main-navigation{
      display: none;
    }
    .browserupgrade .SiteTheme__Site-sc-1ycpvs-0 kKWbES .sc-ehmTmK fstLMM SiteTheme__StyledMainNavigation-sc-1ycpvs-1 cdoBQQ {
      display: none;
    }
    .b-account-page-breadcrumb-wrapper {
      display: none;
    }
    `;
  const minifiedStyles = styles.replace(/\s\s+/g, "");

  return `;(function() {
      if (document.body.dataset.injectedFromApp) return;
      document.head.insertAdjacentHTML("beforeend", "<style>${minifiedStyles}</style>");
      document.body.dataset.injectedFromApp = 'true';
    })();
    `;
};
