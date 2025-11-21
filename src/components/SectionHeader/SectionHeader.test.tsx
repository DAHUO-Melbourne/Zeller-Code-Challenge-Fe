import { render, screen } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

const renderSectionHeader = () => render(<SectionHeader title='User Types' />);

describe('SectionHeader component', () => {
  test('Renders the SectionHeader component correctly with expected html tag', () => {
    renderSectionHeader();
    expect(
      screen.getByRole('heading', { name: 'User Types', level: 2 }),
    ).toBeInTheDocument();
  });

  describe('Styles', () => {
    test('Renders the wrapper correctly with expected styles', () => {
      renderSectionHeader();
      const wrapper = screen.getByTestId('SectionHeader-wrapper-User Types');
      expect(wrapper).toHaveStyle(`
        padding: 24px 0;
        border-top: 1px solid #e5e7eb;
      `);
    });

    test('Renders the title correctly with expected styles', () => {
      renderSectionHeader();
      const title = screen.getByRole('heading', {
        name: 'User Types',
        level: 2,
      });
      expect(title).toHaveStyle(`
        font-size: 16px;
        font-weight: 600;
        color: #1f2937;
      `);
    });
  });
});
