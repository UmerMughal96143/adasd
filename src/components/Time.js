import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function Time({valueFromPicker}) {
    const [time , setTime] = useState('')
    console.log("🚀 ~ file: Date.js ~ line 12 ~ Date ~ time", time)
    const [date , setDate] = useState('')
  const inputProps = {
    placeholder: "Please Select...",
  };

  const boxInputProps = {
    label: "Range",
    labelStyle: "stacked",
    inputStyle: "outline",
    placeholder: "Please Select...",
  };
  return (
    <Page>
      <Datepicker display="anchored"  controls={["time"]} timeFormat="h:mm A" touchUi={true} onChange={(e) => valueFromPicker(e)} />
    </Page>
  );
}


export default Time