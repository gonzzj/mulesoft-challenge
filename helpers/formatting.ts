import { Network, NodeLink, NodeDependency } from '../types/dependency';
import random from 'lodash/random';

export const formatDependencies = (value: string): Network => {
  const dependencies = [];
  for (const dependency of value.split("\n")) {
    dependencies.push(dependency.split(" ").filter((item) => item !== 'DEPENDS'));
  }

  const flattedDependencies = new Set(dependencies.flat());

  return {
    nodes: getNodes(flattedDependencies),
    links: getLinks(dependencies)
  }
};

const getNodes = (flattedDependencies: Set<string>): NodeDependency[] => {
  const nodes = [];

  for (const node of flattedDependencies.values()) {
    nodes.push({
      id: node,
      height: 1,
      size: 32,
      color: `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    });
  }

  return nodes;
};

const getLinks = (dependencies: string[][]): NodeLink[] => {
  const links = [];

  for (const link of dependencies) {
    for (const node of link) {
      if (node !== link[0]) {
        links.push({
          source: link[0],
          target: node,
          distance: 100
        });
      }
    }
  }

  return links;
};
