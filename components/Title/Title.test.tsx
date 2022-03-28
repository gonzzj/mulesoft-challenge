import { render } from '@testing-library/react'
import Title from './Title';

describe('Components: Title', () => {
  it('renders a title without description', () => {
    const { container } = render(<Title label={'Test title world'} />);
    const title = container.querySelector('h1');
    expect(title).toBeDefined();
    expect(title?.textContent).toBe('Test title world');
    expect(title?.textContent).not.toBe('Error Test title');

    const description = container.querySelector('h6');
    expect(description?.textContent).toBeUndefined();
  })

  it('renders a title with description', () => {
    const { container } = render(<Title label={'Test title world'} description={'Test new description'} />);
    const title = container.querySelector('h1');
    expect(title).toBeDefined();
    expect(title?.textContent).toBe('Test title world');
    expect(title?.textContent).not.toBe('Error Test title');

    const description = container.querySelector('h6');
    expect(description?.textContent).toBe('Test new description');
  })
});
