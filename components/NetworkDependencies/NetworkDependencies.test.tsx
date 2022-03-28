import { render } from '@testing-library/react'
import { graph } from '../../mocks/graph';
import NetworkDependencies from './NetworkDependencies';

describe('Components: NetworkDependencies', () => {
  beforeEach(() => {
    Object.defineProperty(global, "ResizeObserver", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => "Mock test works"),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });

  it('renders a network graph', () => {
    const { container } = render(<NetworkDependencies data={graph} />);
    const box = container.querySelector('.MuiBox-root');
    expect(box?.children).toHaveLength(1);
  });

  it('renders a network graph without data', () => {
    const { container } = render(<NetworkDependencies />);
    const box = container.querySelector('.MuiBox-root');
    expect(box?.children).toHaveLength(0);
  });
});
