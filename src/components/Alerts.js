// TextU component
export default function Alerts(props) {

    // Render the TextU component
    return (
        <div style={{height:'20px'}}>
            {
                props.alert && <div className="alert alert-success text-center py-0" role="alert">
                    <span><strong>{props.alert.type}! </strong>{props.alert.message}</span>
                </div>
            }
        </div>
    )
}