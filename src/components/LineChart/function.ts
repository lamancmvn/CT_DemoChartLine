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
    .on("mouseout", (e: any) => console.log(e))
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
  const { yMinValue, yMaxValue, xMinValue, xMaxValue, xScale, yScale } = props

  const line = d3
    .line()
    .x((value: any, index: number) => xScale(value.label))
    .y((value: any) => 300 - yScale(value.value * 0.6))
  // .curve(d3.curveCardinal)
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

  svg
    .append("rect")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .style("opacity", 0)
    .on("mouseover", () => {
      focus.style("display", null)
    })
    .on("mouseout", () => {
      focus.style("opacity", 0)
      tooltip.transition().duration(300).style("opacity", 0)
    })
    .on("mousemove", e => mousemove(e))

  function mousemove(e: any) {
    console.log(e)
    const bisect = d3.bisector((d: any) => d.label).left
    const xPos = e.x
    const invertedPoint = xScale.invert(xPos - margin.left) - 1
    //const invertedPoint = useScaleBands
    //   ? scaleBandInvert(xScale, xPos)
    //   : xScale.invert(xPos)
    const x0 = bisect(data, invertedPoint)
    let d0 = findHoverData
      ? findHoverData(e, height, data, xScale, yScale)
      : data[x0]
    focus.style("opacity", 1)

    if (!d0) d0 = data[x0]
    console.log(`LHA:  ===> file: function.ts ===> line 89 ===> d0`, d0)
    try {
      const x = xScale(d0.label)
      console.log(`LHA:  ===> file: function.ts ===> line 103 ===> x`, x)
      const y = 300 - yScale(d0.value * 0.6)
      console.log(`LHA:  ===> file: function.ts ===> line 105 ===> y`, y)
      focus.attr("transform", `translate(${x},${y})`)

      tooltip.transition().duration(300).style("opacity", 0.9)

      tooltip
        .html(d0.tooltipContent || d0.label)
        .style("transform", "translate(-50%,-100%)")
        .style("left", `${xScale(d0.label) + margin.left}px`)
        .style("top", `${yScale(d0.value) + margin.top - 10}px`)
    } catch (e) {
      console.log(e)
    }
  }
}
