import { render, screen } from 'test/utils/test-utils';
import { PageTitle } from './PageTitle';

const renderPageTitle = () => {
  return render(<PageTitle>title</PageTitle>);
};

describe('PagaTitle component', () => {
  test('Render the PageTitle component as expected', () => {
    renderPageTitle();
    expect(
      screen.getByRole('heading', { name: 'title', level: 1 }),
    ).toBeInTheDocument();
  });
});
