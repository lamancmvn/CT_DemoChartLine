import { useEffect, createRef } from "react"
import classnames from "classnames"
import * as d3 from "d3"
interface Idata {
  label: number
  value: number
}
const BaseChart = (drawChart: any) => {
  const Chart = (props: {
    svgProps: any
    axisProps: any
    data: Array<Idata>
  }) => {
    const svgRef = createRef()
    // const tooltipRef = createRef()
    const {
      axisProps,
      data,
      svgProps
      // tooltipClass,
      // scaleBandPadding,
      // ...restProps
    } = props
    // const { useScaleBands, findHoverData } = extraProps

    const { margin, width, height, svgContainerClass } = svgProps

    const yMinValue = d3.min(data, (d: any) => d.value)
    const yMaxValue = d3.max(data, (d: any) => d.value)

    const xMinValue = d3.min(data, (d: any) => d.label)
    const xMaxValue = d3.max(data, (d: any) => d.label)

    let xScale = d3
      .scaleLinear()
      .domain([~~xMinValue!, ~~xMaxValue!])
      .range([0, width])

    // if (useScaleBands.x) {
    //   xScale = d3
    //     .scaleBand()
    //     .range([0, width])
    //     .domain(data.map(d => d.label))
    //     .padding(scaleBandPadding)
    // }

    let yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, ~~yMaxValue!])

    // if (useScaleBands.y) {
    //   yScale = d3
    //     .scaleBand()
    //     .range([height, 0])
    //     .domain(data.map(d => d.value))
    //     .padding(scaleBandPadding)
    // }

    useEffect(() => {
      flushChart(svgRef)
      draw(svgRef)
    })
    const flushChart = (svgRef: any) => {
      d3.select(svgRef.current).selectAll("*").remove()
    }

    const draw = (svgRef: any) => {
      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)

      // drawAxis({
      //   ...axisProps,
      //   ...svgProps,
      //   ...extraProps,
      //   data,
      //   svgRef,
      //   xScale,
      //   yScale,
      // });

      drawChart({
        svgRef,
        data,
        xScale,
        yScale,
        ...svgProps
        // ...restProps
      })

      // drawTooltip({
      //   useScaleBands,
      //   svgRef,
      //   tooltipRef,
      //   data,
      //   xScale,
      //   yScale,
      //   findHoverData,
      //   ...svgProps,
      //...restProps,
      // });
      return (
        <div className="base__container">
          <svg
            ref={svgRef}
            className={classnames("base__svg-container", svgContainerClass)}
          />
          {/* <div
            // className={classnames("base__tooltip", tooltipClass)}
            ref={tooltipRef}
          /> */}
        </div>
      )
    }
  }
  Chart.defaultProps = {
    scaleBandPadding: 0.05
  }
  return Chart
}

export default BaseChart
