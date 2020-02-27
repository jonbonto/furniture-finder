import React, { useState } from "react";
import { Layout } from "antd";

import Search from "./Search";
import Filter from "./Filter";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";

const { Header: HeaderAntd } = Layout

export default function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return (
    <HeaderAntd
      className={`header ${shadowStyle} ${hiddenStyle}`}
    >
      <Search />
      <Filter />
    </HeaderAntd>
  );
}
