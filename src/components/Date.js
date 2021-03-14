import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function Date() {
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
      <Datepicker display="anchored" touchUi={true} />
      <Datepicker display="anchored"  controls={["time"]} timeFormat="h:mm A" touchUi={true} />
    </Page>
  );
}


export default Date