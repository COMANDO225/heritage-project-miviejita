const SunIcon = (props) => {
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
                d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
                fill={props.fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z"
                fill={props.fill}
            />
            <path
                d="M5.46 4.399a.75.75 0 0 0-1.061 1.06l.707.707a.75.75 0 1 0 1.06-1.06l-.707-.707ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM19.601 5.46a.75.75 0 1 0-1.06-1.061l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM18.894 17.834a.75.75 0 1 0-1.06 1.06l.707.707a.75.75 0 1 0 1.06-1.06l-.707-.707ZM3.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM6.166 18.894a.75.75 0 0 0-1.06-1.06l-.707.707a.75.75 0 0 0 1.06 1.06l.707-.707Z"
                fill={props.fill}
            />
        </svg>
    );
}

SunIcon.defaultProps = {
    size: 20,
    fill: '#000'
}

export default SunIcon;