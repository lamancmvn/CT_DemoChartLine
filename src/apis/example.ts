import axiosClient from "./clientAxios"
class Example {
  private url: string
  constructor(url: string) {
    this.url = url
  }
  public getAll(params: any) {
    return axiosClient.get(this.url, { params })
  }
}
const ex = new Example("example")

export default ex
