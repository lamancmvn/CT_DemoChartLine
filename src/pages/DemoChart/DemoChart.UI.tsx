import React, { useState, useRef, useEffect } from "react"
import * as d3 from "d3"
import { AnyRecord } from "node:dns"
interface IData {
  label: number
  value: number
}
const DemoChart = (props: { data: Array<IData> }) => {
  const svgRef = useRef<any>()
  const { data } = props
  useEffect(() => {
    const xMin = d3.min(data, v => v.label)
    const xMax = d3.max(data, v => v.label)
    const yMin = d3.min(data, v => v.value)
    const yMax = d3.max(data, v => v.value)

    const height = 400
    const width = 600
    const xScale = d3.scaleLinear().domain([xMin!, xMax!]).range([0, 600])
    const yScale = d3.scaleLinear().domain([yMax!, yMin!]).range([400!, 0!])

    const svg = d3.select(svgRef.current)

    const myLine = d3
      .line()
      .x((value: any, index: number) => xScale(value.label))
      .y((value: any) => 300 - yScale(value.value * 0.6))
      .curve(d3.curveCardinal)

    // svg
    //   .append("g")
    //   .attr("class", "grid")
    //   .attr("transform", `translate(0,${height})`)
    //   .call(
    //     d3
    //       .axisBottom(xScale)
    //       .tickSize(-height)
    //       .tickFormat(() => "")
    //   )

    // svg
    //   .append("g")
    //   .attr("class", "grid")
    //   .call(
    //     d3
    //       .axisLeft(yScale)
    //       .tickSize(-width)
    //       .tickFormat(() => "")
    //   )

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value: any) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "red")

    const focus = svg
      .append("g")
      .attr("class", "focus")
      .style("display", "none")

    focus.append("circle").attr("r", 5).attr("class", "circle")
    const tooltip = d3
      .select("#container")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
  }, [data])
  return (
    <div>
      <React.Fragment>
        <svg ref={svgRef} style={{ width: "600px", height: "400px" }}></svg>
      </React.Fragment>
    </div>
  )
}

export default DemoChart
