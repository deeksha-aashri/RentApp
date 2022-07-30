import React, { useState } from 'react'
import { useContext } from 'react';
import Paper from '@mui/material/Paper'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { MenuItem, Select, FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material'
import Box from '@mui/material/Box';
import context from './Context';
import { data } from './data';

function Filterlayer() {
    let result = data["hotels"];
    let typearr = ["hotel", "house"]
    const type = useContext(context);
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


                <FormControl >
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        When
                    </InputLabel>
                    <NativeSelect
                        
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}></option>

                    </NativeSelect>
                </FormControl>

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
                       {result.map((obj)=>{
                        (obj["price"].slice(1,4))<500?
                        (
                            <option>Less than $500</option>
                        )
                        :
                        (
                            <option>More than 500</option>
                        )
                       })}
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
                            result.map((obj)=>(
                                obj.type=="house"?
                                (
                                    <option>House</option>
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