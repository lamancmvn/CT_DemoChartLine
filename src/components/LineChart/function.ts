import * as d3 from "d3"
import classnames from "classnames"
export const drawLine = (props: any) => {
  const { svg, data, line } = props
  svg
    .append("path")
    .datum(data)
    .join("path")
    .attr("fill", "none")
    .attr("stroke-width", 2)
    .attr("stroke", "red")
    .attr("d", (value: any) => line(value))
}
export const createSVG = (props: any) => {
  const { svgRef, width, margin, height } = props
  return d3
    .select(svgRef.current)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)
}

export const createLine = (props: any) => {
  const { yMinValue, yMaxValue, xMinValue, xMaxValue } = props
  const xScale = d3
    .scaleLinear()
    .domain([xMinValue!, xMaxValue!])
    .range([0, 600])

  const yScale = d3
    .scaleLinear()
    .domain([yMaxValue!, yMinValue!])
    .range([400!, 0!])

  const line = d3
    .line()
    .x((value: any, index: number) => xScale(value.label))
    .y((value: any) => 300 - yScale(value.value * 0.6))
    .curve(d3.curveCardinal)
  return line
}

export const drawTooltip = (config: any) => {
  const {
    useScaleBands,
    margin,
    width,
    height,
    data,
    svgRef,
    tooltipRef,
    markerClass,
    xScale,
    yScale,
    findHoverData
  } = config

  const svg = d3.select(svgRef.current).select("g")
  const tooltip = d3.select(tooltipRef.current)

  const focus = svg.append("g").attr("class", "focus").style("display", "none")

  focus
    .append("circle")
    .attr("r", 5)
    .attr("class", classnames(["line-chart__circle", markerClass]))

  if (useScaleBands) focus.style("visibility", "hidden")
}
