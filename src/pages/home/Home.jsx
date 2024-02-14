import React, { useCallback } from "react";
import "./Home.css";

// Components
import GaugeGraph from "../../components/charts/GaugeGraph";
import GNSSMeta from "../../components/charts/GNSSMeta";
import Card from "../../components/card/Card";
import GridLayout from "react-grid-layout";
import LineChart from "../../components/charts/LineChart";

export default function Home() {
  // Altitude data callbacks
  const get_altitude_mission_time = useCallback((data) => {
    return data.altitude.map((packet) => packet.mission_time / 1000);
  }, []);

  const get_altitude_y = useCallback((data) => {
    return data.altitude.map((packet) => packet.altitude.metres);
  }, []);

  // Temperature data callbacks
  const get_temp_y = useCallback((data) => {
    return data.altitude.map((packet) => packet.temperature.celsius);
  }, []);

  const get_velocity_mission_time = useCallback((data) => {
    return data.gnss.map((packet) => packet.mission_time / 1000);
  }, []);

  const get_acceleration_y = useCallback((data) => {
    return data.mpu9250_imu.map((packet) => packet.accel_y);
  }, []);

  const get_acceleration_mission_time = useCallback((data) => {
    return data.mpu9250_imu.map((packet) => packet.mission_time / 1000);
  }, []);

  const graphArray = [
    <LineChart
      y_title={"Velocity (m/s)"}
      x_title={"Time (s)"}
      x_cb={get_velocity_mission_time}
      y_cb={get_acceleration_y}
    />,
    <LineChart
      y_title={"Altitude (m)"}
      x_title={"Time (s)"}
      x_cb={get_altitude_mission_time}
      y_cb={get_altitude_y}
    />,
    <LineChart
      y_title={" Acceletation (m/s²)"}
      x_title={"Time (s)"}
      x_cb={get_acceleration_mission_time}
      y_cb={get_acceleration_y}
      zoom_y={0}
    />,
    <GaugeGraph
      title="Temperature"
      x_cb={get_altitude_mission_time}
      y_cb={get_temp_y}
      unit="°C"
      min={-20}
      max={50}
      inner_colour_1="red"
      inner_colour_2="blue"
      outer_colour="blue"
    />,
    <GNSSMeta />,
  ];

  const containerWidth = window.innerWidth;
  const numColumns = 4; // Define the number of columns in the grid
  const spacingX = 4; // Horizontal spacing between grid items
  const spacingY = 4; // Vertical spacing between grid items
  const rowHeight = 125; // Height of each row in the grid
  const defaultItemWidth = 2; // Set the default width for all items
  const defaultItemHeight = 2; // Set the default height for all items
  const minWidth = 1; // Minimum width for grid items
  const minHeight = 2; // Minimum height for grid items

  const gridItems = graphArray.map((component, index) => {
    return {
      i: `item${index}`,
      x: (index * defaultItemWidth) % numColumns,
      y:
        Math.floor((index * defaultItemWidth) / numColumns) * defaultItemHeight,
      w: defaultItemWidth, // Width of the grid item (in terms of grid columns)
      h: defaultItemHeight, // Height of the grid item (in terms of grid rows)
      minW: minWidth,
      minH: minHeight,
    };
  });

  return (
    <div className="app-wrapper">
      <GridLayout
        className="layout"
        layout={gridItems}
        cols={numColumns}
        rowHeight={rowHeight}
        width={containerWidth}
        isResizable={true}
        isBounded={true}
        margin={[spacingX, spacingY]}
        containerPadding={[0, 0]}
        useCSSTransforms={false}
      >
        {graphArray.map((component, index) => (
          <div key={`item${index}`} className="handle">
            <Card key={index} bodyComponent={component} title="test" />
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
