import React from 'react';

export type TextColors = 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'inverse' | 'success' | 'warning' | 'danger' | 'accent';
export type ComponentStatus = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const ComponentStatusMap: Record<Exclude<ComponentStatus, 'default'>, string> = {
  info: 'accent',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
}

export type ValidationInfo = {
  status?: ComponentStatus;
  messages?: string[];
}

export type CSSVars = React.CSSProperties & {
  [key: `--${string}`]: string;
};