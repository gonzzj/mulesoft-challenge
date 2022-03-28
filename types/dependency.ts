export interface NodeDependency {
  id: string
  height: number
  size: number
  color: string
}

export interface NodeLink {
  source: string,
  target: string,
  distance: number
}

export interface Network {
  nodes: NodeDependency[]
  links: NodeLink[]
}