import { Network } from './../types/dependency';
import { isCyclic } from './graph';
import { formatDependencies } from './formatting';
import isEmpty from "lodash/isEmpty";

interface DependenciesValidation { 
  message: string
  valid: boolean,
  graph?: Network
}

const getDependenciesValidation = (message: string, valid: boolean, graph?: Network): DependenciesValidation => ({ 
  message,
  valid,
  graph
});

const validateDependenciesFormat = (value: string): boolean => {
  const rgx = /^(\w+ DEPENDS( \w+){1,}\s*?\n?)*$/g;
  const test = rgx.test(value);

  return test;
};

const validateDependenciesGraph = (graph: Network): boolean => {
  const visited = {};
  const recStack = {};

  for (const node of graph.nodes) {
    if (isCyclic(node.id, visited, recStack, graph.links)) {
      return false;
    }
  }

  return true;
}

export const validateDependencies = (value: string): DependenciesValidation => {
  if (isEmpty(value)) {
    return getDependenciesValidation('The commands are empty', false);
  }

  if (!validateDependenciesFormat(value)) {
    return getDependenciesValidation('The format of the commands are incorrect', false);
  }

  const graph = formatDependencies(value);
  if (!validateDependenciesGraph(graph)) {
    return getDependenciesValidation('There is a circle dependency in the graph and that is incorrect', false);
  }

  return getDependenciesValidation('', true, graph);
};
