export const getThemeClasses = (darkMode, darkClasses, lightClasses) => {
    return darkMode ? `dark ${darkClasses}` : `light ${lightClasses}`;
  };