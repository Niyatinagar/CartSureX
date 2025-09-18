// Reusable Button component for UI consistency
// Future: Add variants, loading state, etc.

import React from 'react';

const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded" {...props}>
    {children}
  </button>
);

export default Button;
