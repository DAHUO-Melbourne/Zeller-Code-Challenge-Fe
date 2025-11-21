import { toCapitalCase } from './formatter';

describe('toCapitalCase util function', () => {
  test('Converts single uppercase word to Capital Case', () => {
    expect(toCapitalCase('ADMIN')).toBe('Admin');
    expect(toCapitalCase('MANAGER')).toBe('Manager');
  });

  test('Converts lowercase words correctly', () => {
    expect(toCapitalCase('admin')).toBe('Admin');
    expect(toCapitalCase('manager')).toBe('Manager');
  });

  test('Returns empty string when input is empty', () => {
    expect(toCapitalCase('')).toBe('');
  });
});
