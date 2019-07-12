import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const CustomLine = (props)=>{

    return (

        <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "#411616" },
            parent: { border: "0.51px solid #cdc"}
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
    );
}

export default CustomLine;