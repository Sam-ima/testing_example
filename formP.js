function getData(){
    // console.log("Hi!");
    var f_name=document.getElementById('n_info');
    // f_name.style.backgroundColor="red";
    var f_style=f_name.style;
    f_style.backgroundColor="yellow";
    f_style.color="#ffffff";
    console.log(f_name.value);

    var address=document.getElementById('a_info');
    // address.style.backgroundColor="#239856";
    var a_style=address.style;
    a_style.backgroundColor="#d12d45";
    a_style.color="#ffffff";
    console.log(address.value);

    var email=document.getElementById('e_info');
    // email.style.backgroundColor="#987654";
    var e_style=email.style;
    e_style.backgroundColor="#dd23d2";
    e_style.color="#ffffff";
    console.log(email.value);

    var password=document.getElementById('p_info');
    // password.style.backgroundColor="rgb(1,111,111)";
    p_style=password.style;
    p_style.backgroundColor="rgb(111,111,111)";
    p_style.color="#ffffff";
    console.log(password.value);
}