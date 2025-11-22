import { render, screen } from 'test/utils/test-utils';
import { PageWrapper } from './PageWrapper';

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
});
