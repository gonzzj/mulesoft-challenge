import { ResponsiveNetwork } from '@nivo/network'
import data from '../../mocks/data.json';
import Box from "@mui/material/Box";

const NetworkDependencies = () => {

  return (
    <Box sx={{ height: 460 }}>
      <ResponsiveNetwork
        data={data}
        linkDistance={(e: any) => e.distance}
        centeringStrength={0.3}
        repulsivity={6}
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
    </Box>
  );
};

export default NetworkDependencies;
