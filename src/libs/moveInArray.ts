import { IActivity } from "../interfaces/redux/states/ICourseInitialState";

export const moveInArray = function (
  arr: [] | [{}] | Array<IActivity>,
  from: number,
  to: number,
  target: string | {}
) {
  let item = arr.splice(from, 1);
  arr.splice(to, 0, target);
};
