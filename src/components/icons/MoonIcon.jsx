const MoonIcon = (props) => {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.486 4.768a7.25 7.25 0 1 0 7.399 9.51 6.25 6.25 0 0 1-7.398-9.51ZM3.25 12a8.75 8.75 0 0 1 10.074-8.65.75.75 0 0 1 .336 1.342 4.75 4.75 0 1 0 5.83 7.499.75.75 0 0 1 1.22.654A8.751 8.751 0 0 1 3.25 12Z"
            fill={props.fill}
            />
        </svg>
    );
}

MoonIcon.defaultProps = {
    size: 20,
    fill: '#000'
}

export default MoonIcon;