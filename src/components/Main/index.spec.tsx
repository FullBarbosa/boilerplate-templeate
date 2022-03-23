import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main/>', () => {
  it('should render the hading', () => {
    render(<Main />);

    expect(screen.getByText('react avançado').textContent).toBe(
      'react avançado'
    );
  });
});
