import { observable, action } from "mobx";

class HomeModel {
  @observable firstname = "irshad";
  @observable dataResult = {};

  @action
  setFirstName(fn) {
    this.firstname = fn;
  }
  @action
  setDataResult(data) {
    this.dataResult = data;
  }
}
export default new HomeModel();
