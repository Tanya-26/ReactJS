

const Message = (props) => {
    const { info, children } = props;
    return (
        <div>
            <h2>{info}</h2>
            {children}
        </div>
    )
}

export default Message