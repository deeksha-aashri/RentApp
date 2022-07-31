import React from 'react'

import Paper from '@mui/material/Paper'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import {  FormControl,  InputLabel, NativeSelect } from '@mui/material'

import context from './Context';
import { data } from './data';

import BasicDatePicker from './Datepicker'

function Filterlayer() {
    let result = data["hotels"];
    let typearr = ["hotel", "house"];
    let priceRangeArr=["Less than $500","Less than $1000","Less than $1500","More than $1500"]
   
    
    return (

        <Paper variant="outlined" elevation={3} sx={{ marginY: "2rem", height: "4rem" }} >
            <ButtonGroup variant="text" sx={{ display: "flex", justifyContent: "space-around", height: "3rem", padding: "0.5rem" }} >


                <FormControl >
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Location
                    </InputLabel>
                    <NativeSelect
                        
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        {result.map((obj)=>(
                            <option>{obj.city}</option>
                        )
                            
                        )}
                    </NativeSelect>
                </FormControl>


                <BasicDatePicker/>

                <FormControl >
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Price
                    </InputLabel>
                    <NativeSelect
                        
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                       {priceRangeArr.map((obj)=>(
                        <option>{obj}</option>
                       )
                       
                       )}
                    </NativeSelect>
                </FormControl>


                <FormControl >
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Property
                    </InputLabel>
                    <NativeSelect
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        {
                            typearr.map((ele)=>(
                                ele=="house"?
                                (
                                    <option >House</option>
                                )
                                :
                                (
                                    <option>Hotel</option>
                                )
                                
                            ))
                        }


                    </NativeSelect>
                </FormControl>

                <Button variant="contained" color="secondary">Search</Button>
            </ButtonGroup>
        </Paper>
    )
}

export default Filterlayer