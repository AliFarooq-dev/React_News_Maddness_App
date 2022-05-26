import { useState } from "react";
import Pass from "./Pass";
import Fail from "./Fail";

export default function Result(props){
if(props.marks>70)
 return <Pass name = {props.name} marks = {props.marks}/>
else if(props.marks<=70)
 return <Fail name = {props.name} marks = {props.marks}/>
}
