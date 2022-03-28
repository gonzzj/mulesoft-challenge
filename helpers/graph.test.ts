import { isCyclic } from './graph';
import { linksComputerTest, linksLetterTest } from '../mocks/links';

describe('Helpers: graph', () => {
  it('Detect if a node links are not cyclic', () => {
    const visited = {
      A: true,
    };
    const recStack = {
      A: false,
    };
    expect(isCyclic('B', visited, recStack, linksLetterTest)).toBeFalsy();
  });

  it('Detect if a node links are cyclic', () => {
    const visited = {
      CPU: true,
      Motherboard: true,
      RAM: true,
      PSU: true,
    };
    const recStack = {
      CPU: true,
      Motherboard: false,
      RAM: false,
      PSU: false,
    };
    expect(isCyclic('Cooler', visited, recStack, linksComputerTest)).toBeTruthy();
  });
});
