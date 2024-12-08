function getMessageToDisplay(message) {
   if (message !== null || message !== '') {
    return message;
   } else {
    return "Hi from React there was no message to display"
   }
}

function MessageDisplay (props) {
    return (
        <div>
            <h4>{getMessageToDisplay(props.displayMessage)}</h4>
        </div>
    );
}

export default MessageDisplay;