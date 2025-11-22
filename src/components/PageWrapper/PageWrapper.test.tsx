import { render, screen } from '../../test/utils/test-utils';
import { PageWrapper } from './PageWrapper';
import { theme } from '../../theme/theme';

const renderPageWrapper = () =>
  render(
    <PageWrapper>
      <span>Test Content</span>
    </PageWrapper>,
  );

describe('PageWrapper component', () => {
  test('Renders the content correctly', () => {
    renderPageWrapper();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  describe('Styles', () => {
    test('Renders the wrapper with expected layout and theme styles', () => {
      renderPageWrapper();
      const wrapper = screen.getByText('Test Content').parentElement;

      expect(wrapper).toHaveStyle('max-width: 1200px');
      expect(wrapper).toHaveStyle('margin: 0 auto');

      expect(wrapper).toHaveStyle(`padding: 0 ${theme.spacings.lg}`);
    });
  });
});
