import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";



function Date({datValueFromPicker}) {
    
  
  return (
    <Page>
      <Datepicker display="anchored" touchUi={true} onChange={(e) => datValueFromPicker(e)}/>
    </Page>
  );
}


export default Date