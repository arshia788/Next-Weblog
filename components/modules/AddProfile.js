
function AddProfile() {
    return (
        <div>
            <InputForm value={profile.name} label="Name" name='name' type='text' changeHandler={changeHandler} />

            <InputForm value={profile.lastName} label="LastName" name='lastname' type='text' changeHandler={changeHandler} />

            <InputForm value={profile.password} label="Password" name='password' type='password' changeHandler={changeHandler} />
        </div>
    )
}

export default AddProfile