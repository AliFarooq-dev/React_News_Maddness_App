export default function Fail(props){
    return(
        <div style={{color:'red'}}>
        <h2>Oops Mr. {props.name}</h2>
        <h3>You are fail with marks {props.marks}</h3>
        </div>
    )
}