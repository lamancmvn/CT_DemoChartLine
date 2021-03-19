import { PATH } from "../constants/paths"
import { Switch, Route } from "react-router-dom"

import DemoChart from "../pages/DemoChart/DemoChart.UI"
import LineChart from "../components/LineChart/index"
import { useState, useEffect } from "react"

interface IData {
  label: number
  value: number
}
const DemoRoute = () => {
  const [data, setData] = useState<Array<IData>>([])
  useEffect(() => {
    regenerateData()
  }, [])
  function regenerateData() {
    const chartData: Array<IData> = []
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * i + 3)
      chartData.push({
        label: i,
        value
      })
    }
    setData(chartData)
  }
  return (
    <Switch>
      <Route
        exact
        path={PATH.HOME}
        component={() => (
          <LineChart
            svgProps={{
              margin: { top: 80, bottom: 80, left: 80, right: 80 },
              width: 1000,
              height: 600
            }}
            data={data}
          />
          // <DemoChart data={data} />
        )}
      />
      <Route
        exact
        path={PATH.LOGIN}
        component={() => <DemoChart data={data} />}
      />
    </Switch>
  )
}

export default DemoRoute
