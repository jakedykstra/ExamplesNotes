// this is a component because it just gets all its data from its parent
import _ from "lodash";
import React from "react";
// here we use react sparklines because it makes our data much easier to handle for graphing
import {
  // first is parent chart, line is what we're passing data to
  Sparklines,
  SparklinesLine,
  // referenceline is simply used for when we want to have a line in the data set by some type (mean, avg, etc)
  SparklinesReferenceLine
} from "react-sparklines";

// lodash is used here to sum the data then divide by length. We want this to print the avg number
function average(data) {
  return _.round(_.sum(data) / data.length);
}

// we make a functional component because we don't need to change state after rendering
export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};
