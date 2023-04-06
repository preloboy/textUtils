// TextU component
export default function Alerts(props) {

    // Render the TextU component
    return (
        props.alert && <div className="alert alert-success text-center" role="alert">
            <span><strong>{props.alert.type}! </strong>{props.alert.message}</span>
        </div>
    )
}