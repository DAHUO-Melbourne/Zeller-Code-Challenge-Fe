import { render, screen } from '../../test/utils/test-utils';
import { SectionHeader } from './SectionHeader';
import { theme } from '../../theme/theme';

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
        padding: ${theme.spacings.lg} 0;
        border-top: 1px solid ${theme.colors.border.light};
      `);
    });

    test('Renders the title correctly with expected styles', () => {
      renderSectionHeader();
      const title = screen.getByRole('heading', {
        name: 'User Types',
        level: 2,
      });
      expect(title).toHaveStyle(`
        font-size: ${theme.fontSizes.lg};
        font-weight: ${theme.fontWeights.semiBold};
        color: ${theme.colors.text.primary};
      `);
    });
  });
});
