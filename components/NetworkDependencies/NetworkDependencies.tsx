import { ResponsiveNetwork } from '@nivo/network'
import Box from "@mui/material/Box";
import { Network } from '../../types/dependency';

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
        linkDistance={(e: any) => e.distance}
        centeringStrength={0.3}
        repulsivity={100}
        nodeSize={(n: any) => n.size}
        activeNodeSize={(n: any) => 1.5 * n.size}
        nodeColor={(e: any) => e.color}
        nodeBorderWidth={1}
        nodeBorderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.8
              ]
          ]
        }}
        linkThickness={(n: any) => 2+2 * n.target.data.height}
        linkBlendMode="multiply"
        motionConfig="wobbly"
      />
    )}
  </Box>
);

export default NetworkDependencies;
