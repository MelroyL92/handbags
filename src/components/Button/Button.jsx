

    function Button ({type = "button", className, disabled}) {

    return (
        <button
        type= {type}
        disabled= {disabled}
        >
            {className}
        </button>
    )
    }


    export default Button;