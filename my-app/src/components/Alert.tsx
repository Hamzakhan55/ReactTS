// interface Props {
//     children: string;
//     onClose: () => void;
// }

// function Alert({children, onClose}: Props){
//   return (
//     <div className="alert alert-primary alert-dismissible">
// {children}
// <button type="button" className="btn-close" onClick = {onClose} data-bs-dismiss="alert"></button>
//     </div>
//   )}

// export default Alert;





interface Props {
    children: string;
    onClose: () => void

}


function Alert({children, onClose}: Props){
    return (
        <>
            <div className="alert alert-primary alert-dismissible" role="alert">{children}
            <button type="button" className="close" onClick = {onClose} data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
            </div>
        </>
    )
}

export default Alert;