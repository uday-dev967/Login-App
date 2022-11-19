import './index.css'

const Logout = props => {
  const {onClickOut} = props
  console.log(onClickOut)
  return (
    <button type="button" className="login-button" onClick={onClickOut}>
      Logout
    </button>
  )
}

export default Logout
