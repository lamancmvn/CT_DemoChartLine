import * as d3 from "d3"
import classnames from "classnames"
import React, { useEffect, useRef } from "react"

import { drawLine, createSVG, createLine, drawTooltip } from "./function"

interface IData {
  label: number
  value: number
}

const LineChart = (props: { svgProps: any; data: Array<IData> }) => {
  const svgRef = useRef<any>()
  const tooltipRef = useRef<any>()
  const { data, svgProps } = props
  // const { useScaleBands, findHoverData } = extraProps

  useEffect(() => {
    const { margin, width, height } = svgProps

    const yMinValue = d3.min(data, d => d.value)
    const yMaxValue = d3.max(data, d => d.value)

    const xMinValue = d3.min(data, d => d.label)
    const xMaxValue = d3.max(data, d => d.label)

    const xScale = d3
      .scaleLinear()
      .domain([xMinValue!, xMaxValue!])
      .range([0, width])

    const yScale = d3
      .scaleLinear()
      .domain([yMaxValue!, yMinValue!])
      .range([height!, 0!])

    d3.select(svgRef.current).selectAll("*").remove()

    const svg = createSVG({ svgRef, width, margin, height, xScale, yScale })

    const line = d3
      .line()
      .x((value: any, index: number) => xScale(value.label))
      .y((value: any) => 300 - yScale(value.value * 0.6))
      .curve(d3.curveCardinal)
    // const line = createLine({ yMinValue, yMaxValue, xMinValue, xMaxValue })

    drawLine({ svg, line, data })
    drawTooltip({
      // useScaleBands,
      svgRef,
      tooltipRef,
      data,
      xScale,
      yScale,
      // findHoverData,
      ...svgProps
      // ...restProps
    })
    // svg
    //   .append("rect")
    //   .attr("height", 100)
    //   .attr("width", 100)
    //   .attr("x", 10)
    //   .attr("y", 10)
    //   .attr("fill", "green")
    //   .on("mouseout", (d, i) => {
    //     console.log(d, i)
    //     return mouseDown()
    //   })
    //   .on("mouseover", () => mouseUp())

    // function mouseDown() {
    //   console.log("Lam Hoang An")
    // }

    // function mouseUp() {
    //   console.log("mouseUp")
    // }
  }, [data])

  return (
    <div className="base__container">
      <svg ref={svgRef} style={{ background: "yellow" }} />
      <div ref={tooltipRef} />
    </div>
  )
}
export default LineChart
