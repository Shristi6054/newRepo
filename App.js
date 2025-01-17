function login(username,password) {
    if(username === 'admin' && password === 'password123') {
        return 'Login successful';
    }
    else{
        return 'Invalid Credentials';
    }
}
module.experts = login;