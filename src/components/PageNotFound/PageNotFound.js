import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div>
      <h1 className="error-404">Oh no!</h1>
      <p className="error-404" style={{margin:0,
                                       fontSize:"1.3rem"}}>
        Looks like this page does not exist! 
        Click home to return.
      </p>
    </div>
  )
}

export default PageNotFound;