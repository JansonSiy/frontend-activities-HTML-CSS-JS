
function login(){
        
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

        // localStorage.setItem('user', JSON.stringify(user));
        // Better delete this because of privacy/security
        // localStorage.setItem('pass', JSON.stringify(pass));
        
        let data = {user: user, pass: pass};
        // console.log(data);
        
        fetch('/api/login', {
            method: 'POST',
            // send niya ung data sa api na yan
            cache: 'no-cache',
            body: JSON.stringify(data),
            // dapat JSONstring pag sinesend sa api
        })
            .then(function(response){
            if ( response.ok )
                return response.json()  
            throw new Error('Invalid login');
            })
            .then(function(data){
                //ung data galing sa 23
            location.href = data.redirect;
            localStorage.setItem('userdata', data.userdata);
            console.log(data.userdata);
            })
            .catch(function(error){
                console.error(error.message);
            });
    }

let submit = document.getElementById('submit');
submit.addEventListener('click', login);











function login(event){
    event.stopPropagation();
    // pag may event pa after netong event di gagana
    // need ng parameter na event pag gagamit ka ng event sa loob ng functon
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');

    localStorage.setItem('user', user.value);
    localStorage.setItem('pass', pass.value);

    let data = {user: user.value, pass: pass.value};
    console.log(data);

    fetch('/api/login', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data),
        })
        .then(function(response){
        if ( response.ok )
        return response.json()
        throw new Error('Invalid login');
        })
        .then(function(data){
        location.href = data.redirect;
        localStorage.setItem('userdata', data.userdata);
        console.log(data.userdata);
        })
        .catch(function(error){
        console.error(error.message);
    });
}

let submit = document.getElementById('submit');
submit.addEventListener('click', login);