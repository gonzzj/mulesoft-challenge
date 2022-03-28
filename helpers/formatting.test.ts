import { formatDependencies } from './formatting';
import { linksComputerTest, linksLetterTest } from '../mocks/links';

jest.mock("lodash/random", () =>
  jest.fn(() => 3)
);

describe('Helpers: formatting', () => {
  it('Format string to dependencies for graph', () => {
    const inputText = "A DEPENDS B C\nB DEPENDS F G\nC DEPENDS G\nG DEPENDS Z";
    const expectedDependencies = {
      nodes: [
        {
          id: "A",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "B",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "C",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "F",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "G",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "Z",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        }
      ],
      links: linksLetterTest,
    };

    expect(formatDependencies(inputText)).toEqual(expectedDependencies);
  });

  it('Format string to dependencies for graph 2', () => {
    const inputText = "CPU DEPENDS Motherboard RAM\nMotherboard DEPENDS PSU Cooler\nCooler DEPENDS CPU\n";
    const expectedDependencies = {
      nodes: [
        {
          id: "CPU",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "Motherboard",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "RAM",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "PSU",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
        {
          id: "Cooler",
          height: 1,
          size: 32,
          color: "rgb(3, 3, 3)"
        },
      ],
      links: linksComputerTest,
    };

    expect(formatDependencies(inputText)).toEqual(expectedDependencies);
  })
});
