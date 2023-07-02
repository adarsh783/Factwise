import React from 'react';

const CanShow = React.memo(({ show, children, fallbackComponent }) =>
  show ? children : fallbackComponent || null
);

CanShow.displayName = 'CanShow';

export default CanShow;
