import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function Date() {
    const inputProps = {
        placeholder: 'Please Select...'
    };
    
    const boxInputProps = {
        label: 'Range',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...'
    };
    
    return (
        <Page>
            <Datepicker controls={['date']} inputComponent="input" inputProps={inputProps} />
            <Datepicker controls={['date']} inputProps={boxInputProps} />
            <Datepicker controls={['date']}  display="inline"/>
        </Page>
    );
}


export default Date;