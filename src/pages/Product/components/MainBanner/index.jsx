import React, { useContext } from 'react';
import { ProductContext } from 'pages/Product';

const MainBanner = () => {
  const { images } = useContext(ProductContext);
  console.log('state :>> ', images);
  return <div> </div>;
};

export default MainBanner;
