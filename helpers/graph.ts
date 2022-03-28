import { NodeLink } from './../types/dependency';

interface Stack {
  [key: string]: boolean
}

export const isCyclic = (vertex: string, visited: Stack, recStack: Stack, links: NodeLink[]) => {
  if (!visited[vertex]) {
    visited[vertex] = true;
    recStack[vertex] = true;
  }

  const nodeNeighbors: NodeLink[] = [...links.filter((link: NodeLink) => link.source === vertex)];

  for (const currentNode of nodeNeighbors) {
    if (!visited[currentNode.target] && isCyclic(currentNode.target, visited, recStack, links)) {
      return true;
    } else if (recStack[currentNode.target]) {
      return true;
    }
  }

  recStack[vertex] = false;
  return false;
};
