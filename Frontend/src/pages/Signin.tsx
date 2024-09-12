import Form from "../components/Form"
import SignupQuote from "../components/SignupQuote"


const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <Form type={"Signin"} />
    </div>
    <div className="invisible lg:visible"><SignupQuote /></div>

  </div>
  )
}

export default Signin
