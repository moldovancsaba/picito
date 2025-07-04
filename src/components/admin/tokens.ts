// Design tokens for admin components
export const tokens = {
  colors: {
    primary: '#0070f3',
    primaryHover: '#0060df',
    primaryLight: '#0051cc',
    secondary: '#374151',
    text: '#333333',
    textSecondary: '#6b7280',
    textMuted: '#9ca3af',
    border: '#e5e7eb',
    borderLight: '#ddd',
    background: '#ffffff',
    backgroundSecondary: '#f5f5f5',
    error: '#dc2626',
    errorBackground: '#fef2f2',
    success: '#10b981',
    successBackground: '#ecfdf5',
    warning: '#f59e0b',
    warningBackground: '#fffbeb',
    focus: 'rgba(0, 112, 243, 0.2)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  borderRadius: {
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  transitions: {
    fast: '0.15s ease',
    base: '0.2s ease',
    slow: '0.3s ease',
  },
} as const;
