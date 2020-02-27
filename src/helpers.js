import _ from "lodash";

export const filterByStyle = (filteredStyles, styles) => !_.isEmpty(_.intersection(filteredStyles, styles))

export const filterByDelivery = (filteredDelivery, time) => {
  for (const fd of filteredDelivery){
    if(_.inRange(time, fd.start, fd.end))
      return true;
  }
  return false;
}
