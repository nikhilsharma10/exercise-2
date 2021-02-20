
import React from "react";
import ReactDOM from 'react-dom';

const sampleJSON = {
    "object": {
      "name": "Pluralsight",
      "number": 1,
      "address": "India",
      "website": "https://www.pluralsight.com/"
    }
  }

const json = '[{"Heading1":[{"questionID":"q1","questionTitle":"Question 1","question":"This is question1","status":0,"files":[],"uploadType":"none"},{"questionID":"q2","questionTitle":"Question 2","question":"This is question2","status":0,"files":[],"uploadType":"none"}]},{"Heading2":[{"questionID":"q3","questionTitle":"Question 11","question":"This is a question11","status":0,"files":[],"uploadType":"none"}]},{"Heading3":[{"questionID":"q4","questionTitle":"Question 1","question":"This is a question","status":0,"files":[],"uploadType":"none"}]}]';
const parsed = JSON.parse(json);
const result = parsed.map(entry => {
  return {Title: Object.keys(entry)[0]};
});
console.log(result);
function LoadJson() {
    return(


        <div>{Object.keys(sampleJSON.object)}
        </div>
        /*<div>
          {
            Object.keys(sampleJSON.object).map((key, i) => (
              <p key={i}>
                <span>Key Name: {key}</span>
                <span>Value: {sampleJSON.object[key]}</span>
              </p>
            )
          }
        </div>*/
      )
}
export default LoadJson;