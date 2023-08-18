import InputForm from "./InputForm"

function ProfileForm({profile, changeHandler}){
  return (
    <div>
        <InputForm label="Name" changeHandler={changeHandler} value={profile.name} type="text" />
        <InputForm label="LastName"  changeHandler={changeHandler} value={profile.lastname} type="text" />
        <InputForm label="Password" changeHandler={changeHandler} value={profile.password} type="password" />
    </div>
  )
}

export default ProfileForm