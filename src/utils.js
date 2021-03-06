const getComputedPropertiesToString = (node) => {
  const styleDeclaration = window.getComputedStyle(node, null);
  let computedProperties = '';

  for (let i = 0; i < styleDeclaration.length; i++) {
    const cssProperty = styleDeclaration[i];

    // this appears to work just as well
    // computedProperties += `${cssProperty}: ${styleDeclaration[cssProperty]};\n`;
    computedProperties += `${cssProperty}: ${styleDeclaration.getPropertyValue(cssProperty)};\n`;
  };

  return computedProperties;
};

// to string, alternate way that might be better
const getComputedPropertiesFromCssText = (node) => 
  window.getComputedStyle(node, null).cssText.replace(/;/g, ';\n');

// to object
export const getComputedProperties = (node) => {
  const styleDeclaration = window.getComputedStyle(node, null);
  const computedProperties = {};

  for (let i = 0; i < styleDeclaration.length; i++) {
    const cssProperty = styleDeclaration[i];
    const cssPropertyValue = styleDeclaration.getPropertyValue(cssProperty);

    computedProperties[cssProperty] = cssPropertyValue;
  };

  return computedProperties;
};

export default getComputedPropertiesToString;
