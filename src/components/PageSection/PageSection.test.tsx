import { render, screen } from 'test/utils/test-utils';
import { PageSection } from './PageSection';

const renderPageSection = () => {
  return render(
    <PageSection>
      <h2>title</h2>
    </PageSection>,
  );
};

describe('PageSection component', () => {
  test('Render the PageSection and children as expected', () => {
    renderPageSection();
    expect(
      screen.getByRole('heading', { name: 'title', level: 2 }),
    ).toBeInTheDocument();
  });
});
