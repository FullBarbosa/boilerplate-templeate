import { render } from '@testing-library/react';
import Home from '.';

describe('<index/>', () => {
  it('testing render componente', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
