import InputForm from "./InputForm"

function ProfileForm({profile, changeHandler}){


  return (
    <div>
        <InputForm name='name' label="Name" changeHandler={changeHandler} value={profile.name} type="text" />
        <InputForm name='lastname' label="LastName"  changeHandler={changeHandler} value={profile.lastname} type="text" />
        <InputForm name='password' label="Password" changeHandler={changeHandler} value={profile.password} type="password" />
    </div>
  )
}

export default ProfileForm