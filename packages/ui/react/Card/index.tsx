import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div style={{ padding: 16, border: '1px solid #ddd' }}>{children}</div>;
};
