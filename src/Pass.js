
export default function Pass(props){
    return(
        <div style={{color: 'green'}}>
            <h2>Congratulation Dear {props.name}</h2>
            <h3>You are Pass with {props.marks}</h3>
        </div>
    )
}