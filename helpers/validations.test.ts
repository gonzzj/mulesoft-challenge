import { validateDependencies } from './validations';

jest.mock("lodash/random", () =>
  jest.fn(() => 3)
);

describe('Helpers: validations', () => {
  it('Validate if the input commands is empty', () => {
    expect(validateDependencies('')).toEqual({ 
      message: 'The commands are empty',
      valid: false
    });
  });

  it('Validate if the input commands format is incorrect', () => {
    expect(validateDependencies('A DEPDS B C\nC DEPENDS Z')).toEqual({ 
      message: 'The format of the commands are incorrect',
      valid: false
    });
  });

  it('Validate if the commands has a cycle dependency', () => {
    expect(validateDependencies('A DEPENDS B C\nC DEPENDS Z\nZ DEPENDS H\nH DEPENDS A')).toEqual({ 
      message: 'There is a circle dependency in the graph and that is incorrect',
      valid: false
    });
  });

  it('Validate if the commands are correct', () => {
    expect(validateDependencies('A DEPENDS B C\nC DEPENDS Z\nZ DEPENDS H')).toEqual({ 
      message: '',
      valid: true,
      graph: {
        nodes: [
          {
            color: "rgb(3, 3, 3)",
            height: 1,
            id: "A",
            size: 32,
          },
          {
            color: "rgb(3, 3, 3)",
            height: 1,
            id: "B",
            size: 32,
          },
          {
            color: "rgb(3, 3, 3)",
            height: 1,
            id: "C",
            size: 32,
          },
          {
            color: "rgb(3, 3, 3)",
            height: 1,
            id: "Z",
            size: 32,
          },
          {
            color: "rgb(3, 3, 3)",
            height: 1,
            id: "H",
            size: 32,
          }
        ],
        links: [
          {
            distance: 100,
            source: "A",
            target: "B",
          },
          {
            distance: 100,
            source: "A",
            target: "C",
          },
          {
            distance: 100,
            source: "C",
            target: "Z",
          },
          {
            distance: 100,
            source: "Z",
            target: "H",
          }
        ]
      }
    });
  });
});
