import Header from "../Components/Header"
import SignUpSignIn from "../Components/SignUpSignIn"

const Singup = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center w-full h-[90vh] ">
        <SignUpSignIn/>
      </div>
    </div>
  )
}

export default Singup
