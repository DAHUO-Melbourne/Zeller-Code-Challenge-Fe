import { render, screen } from 'test/utils/test-utils';
import { SectionHeader } from './SectionHeader';

const renderSectionHeader = () => render(<SectionHeader title='User Types' />);

describe('SectionHeader component', () => {
  test('Renders the SectionHeader component correctly with expected html tag', () => {
    renderSectionHeader();
    expect(
      screen.getByRole('heading', { name: 'User Types', level: 2 }),
    ).toBeInTheDocument();
  });
});
