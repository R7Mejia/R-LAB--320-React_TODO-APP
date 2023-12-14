import Boton from "../Boton";

export default function ActionButton({
    children,
    className,
    dispatch,
    type,
    payload
}) {
    return (
        <Boton
            onClick={() => dispatch({ type: type, payload: payload })}
            className={className}
        >
            {children}
        </Boton>
    );
}