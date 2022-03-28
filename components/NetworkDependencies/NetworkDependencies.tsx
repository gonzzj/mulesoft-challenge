import React from 'react';
import { ResponsiveNetwork } from '@nivo/network'
import Box from "@mui/material/Box";
import { Network, NodeDependency, NodeLink } from '../../types/dependency';

interface NetworkDependenciesProps {
  data?: Network
}

const NetworkDependencies = ({ data }: NetworkDependenciesProps) => (
  <Box 
    sx={{ 
      height: 456,
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: 1
    }}
  >
    {data && (
      <ResponsiveNetwork
        data={data}
        linkDistance={(e: NodeLink) => e.distance}
        centeringStrength={0.3}
        repulsivity={20}
        nodeSize={(n: NodeDependency) => n.size}
        activeNodeSize={(n: NodeDependency) => 1.5 * n.size}
        nodeColor={(e: NodeDependency) => e.color}
        linkThickness={2}
        linkBlendMode="multiply"
        motionConfig="wobbly"
      />
    )}
  </Box>
);

export default React.memo(NetworkDependencies);
