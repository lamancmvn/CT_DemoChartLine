import { FC } from "react"
import { Row, Col, Timeline } from "antd"
import { PropsType } from "./TimeLine.Interface"
import "./TimeLine.Style.css"

const TimeLine = (props: { timeLines: Array<PropsType> }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Demo TimeLine</h1>
      <Timeline mode={"alternate"} style={{ padding: "10px 40px" }}>
        {props.timeLines.map((e, index: number) => (
          <Timeline.Item label={e.year} className="TimeLineItem" key={index}>
            <div className="contentBx">
              <h2>{e.title}</h2>
              <p>{e.content}</p>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  )
}

export default TimeLine
