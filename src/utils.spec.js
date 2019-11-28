import getComputedPropertiesToString, { getComputedProperties } from './utils';

const mockGetComputedStyle = window.getComputedStyle = jest.fn();
const styleDeclaration = {
  'background-position': '0% 0%',
  'background-repeat': 'repeat',
  'background-size': 'auto',
  '0': 'background-position',
  '1': 'background-repeat',
  '2': 'background-size',
  'length': 3
};

const mockStyleDeclaration = {
  ...styleDeclaration,
  getPropertyValue: (cssProperty) =>
    styleDeclaration[cssProperty]
};

mockGetComputedStyle.mockReturnValue(mockStyleDeclaration);

describe('utilities', () => {
  test('getComputedPropertiesToString should return a string of the computed properties', () => {
    const computedProperties = getComputedPropertiesToString('some node', null);

    expect(computedProperties).toMatchSnapshot();
  });

  test('getComputedProperties should return a string of the computed properties', () => {
    const computedProperties = getComputedProperties('some node', null);

    expect(computedProperties).toMatchSnapshot();
  });
});
