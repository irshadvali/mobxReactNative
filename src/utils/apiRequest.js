import HomeModel from "../model/HomeModel";
export const getUsersApi = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const json = await response.json();
  HomeModel.setDataResult(json);
  return json;
};
