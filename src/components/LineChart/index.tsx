import * as d3 from "d3"
import classnames from "classnames"
import React, { useEffect, useRef } from "react"

import { drawLine, createSVG, createLine } from "./function"
import { configure } from "@testing-library/dom"

interface IData {
  label: number
  value: number
}

const LineChart = (props: { svgProps: any; data: Array<IData> }) => {
  const svgRef = useRef<any>()
  const { data, svgProps } = props
  // const { useScaleBands, findHoverData } = extraProps

  useEffect(() => {
    const { margin, width, height } = svgProps

    const yMinValue = d3.min(data, d => d.value)
    const yMaxValue = d3.max(data, d => d.value)

    const xMinValue = d3.min(data, d => d.label)
    const xMaxValue = d3.max(data, d => d.label)

    d3.select(svgRef.current).selectAll("*").remove()

    const svg = createSVG({ svgRef, width, margin, height })

    const line = createLine({ yMinValue, yMaxValue, xMinValue, xMaxValue })

    drawLine({ svg, line, data })

    svg
      .append("rect")
      .attr("height", 100)
      .attr("width", 100)
      .attr("x", 10)
      .attr("y", 10)
      .attr("fill", "green")
      .on("mouseout", (d, i) => {
        console.log(d, i)
        return mouseDown()
      })
      .on("mouseover", mouseDown)

    function mouseDown() {
      console.log("Lam Hoang An")
    }

    function mouseUp() {
      console.log("mouseUp")
    }
  }, [data])

  return (
    <div className="base__container">
      <svg ref={svgRef} />
    </div>
  )
}
export default LineChart
