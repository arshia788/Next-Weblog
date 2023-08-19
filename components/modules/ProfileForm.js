import InputForm from "./InputForm"

function ProfileForm({userCheck,profile, changeHandler}){



  return (
    <div>
        {userCheck.name ?
        null
        :
        <InputForm name='name' label="Name" changeHandler={changeHandler} value={profile.name} type="text" />
        }

        {
          userCheck.lastname ? 
          null
          :
          <InputForm name='lastname' label="LastName"  changeHandler={changeHandler} value={profile.lastname} type="text" />
        }
        <InputForm name='password' label="Password" changeHandler={changeHandler} value={profile.password} type="password" />
    
    
    </div>
  )
}

export default ProfileForm