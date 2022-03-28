import { fireEvent, render } from '@testing-library/react'
import InputDependencies from './InputDependencies';

describe('Components: InputDependencies', () => {
  it('renders with empty commands error', () => {
    const { container } = render(<InputDependencies setData={(graph) => graph}/>);
    const button = container.querySelector('button');
    fireEvent.click(button as HTMLButtonElement);

    const helperText = container.querySelector('#input-dependencies-helper-text');
    expect(helperText?.textContent).toBe('The commands are empty');
  });

  it('renders input commands correctly', () => {
    const { container } = render(<InputDependencies setData={(graph) => graph} />);
    const textarea = container.querySelector('textArea');
    const button = container.querySelector('button');
    fireEvent.change(textarea as HTMLButtonElement, {target: {value: 'A DEPENDS B'}});
    fireEvent.click(button as HTMLButtonElement);

    const helperText = container.querySelector('#input-dependencies-helper-text');
    expect(helperText).toBeNull();
  });
});
