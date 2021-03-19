import { useState } from "react"
import TimeLine from "../../components/Demo/TimeLine/TimeLine.UI"
import { PropsType } from "../../components/Demo/TimeLine/TimeLine.Interface"
const initStateTimeLine: Array<PropsType> = [
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  },
  {
    title: "Lam Hoang An",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquamtenetur aperiam sint, non voluptatum quas saepe ipsam minus beataeculpa neque. Nam beatae ex sed explicabo? Deserunt in voluptatumquis.",
    year: "2015-09-01"
  }
]
const DemoTimeLineUI = () => {
  const [stateTimeLine, setStateTimeLine] = useState(initStateTimeLine)
  return <TimeLine timeLines={stateTimeLine} />
}

export default DemoTimeLineUI
