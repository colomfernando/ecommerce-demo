import { func, number, oneOf } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Styles from './styles';

const QtySelector = ({ qty, type, plusFn, minusFn, ...props }) => {
  const validQty = !qty ? 1 : qty;
  const [qtyToShow, setQtyToShow] = useState(validQty);

  const onClickHandlesMinus = () => {
    if (qtyToShow <= 1) return null;
    const newQty = qtyToShow - 1;
    setQtyToShow(newQty);
    minusFn(newQty);
  };

  const onClickHandlesPlus = () => {
    const newQty = qtyToShow + 1;
    setQtyToShow(newQty);
    plusFn(newQty);
  };

  useEffect(() => {
    setQtyToShow(qty);
  }, [qty]);

  return (
    <Styles.Wrapper {...props} type={type}>
      <Styles.MinusButton
        disabled={qtyToShow <= 1}
        onClick={onClickHandlesMinus}
        type={type}
      >
        -
      </Styles.MinusButton>
      <Styles.Qty disabled type={type}>
        {qtyToShow}
      </Styles.Qty>
      <Styles.PlusButton onClick={onClickHandlesPlus} type={type}>
        +
      </Styles.PlusButton>
    </Styles.Wrapper>
  );
};

QtySelector.propTypes = {
  qty: number,
  plusFn: func,
  minusFn: func,
  type: oneOf(['vertical', 'horizontal']),
};

QtySelector.defaultProps = {
  qty: 1,
  minusFn: () => null,
  plusFn: () => null,
  type: 'horizontal',
};

export default QtySelector;
