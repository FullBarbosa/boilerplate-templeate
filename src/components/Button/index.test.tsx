import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button/>', () => {
  it('should render the hading', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('heading', {
        name: /Button/i
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
