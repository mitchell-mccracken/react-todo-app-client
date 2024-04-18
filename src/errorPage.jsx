import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div id='error-page'>
      <h1>Page Not Founc</h1>
      <button>
        <Link to='/' > Home</Link>
      </button>
      
    </div>
  )
};


export default ErrorPage;