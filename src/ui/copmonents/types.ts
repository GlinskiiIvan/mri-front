import React from 'react';

export type TextColors = 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'inverse' | 'success' | 'warning' | 'danger' | 'accent';
export type ComponentStatus = 'primary' | 'success' | 'warning' | 'danger' | 'accent';
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CSSVars = React.CSSProperties & {
  [key: `--${string}`]: string;
};