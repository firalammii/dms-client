function onSubmitHandler (e) {
    e.preventDefault();
    //axios call
    console.log(e.target.name);
}

function onChangeHandler (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
}

export { onChangeHandler, onSubmitHandler };