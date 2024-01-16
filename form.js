function formData(){
    // console.log("Clicking the button.....");
    // e.preventDefault();
    // document.getElementById("btn").innerHTMLbackgroundColor
    var full_name=document.getElementById('f_name');
    full_name.style.backgroundColor="red";
    full_name.style.fontSize="30px";
    var f_style=full_name.style;
    f_style.color="#ffffff";
    
    document.getElementById('f_info').innerHTML="hello";

    // document.getElementById('f_info').addEventListener("click");
    // var f_msg=document.getElementById('f_info');
    // f_msg.innerHTML="Hello";

    console.log(full_name.value);

    var address=document.getElementById('add');
    address.style.backgroundColor="#123456";
    document.getElementById('l_info').innerHTML="Hi";

    var add_style=address.style;
    add_style.color="#ffffff";

    // console.log(address)=document.getElementById('a_info');
    // console.log(address);
    console.log(address.value);

    var email=document.getElementById('email');
    email.style.backgroundColor="#468596";

    var e_style=email.style;
    e_style.color="#ffffff";

    document.getElementById('e_info').innerHTML="Namste";
    // var email_msg=document.getElementById('e_info');
    // email_msg.innerHTML="Hi";
    console.log(email.value);

    var c="#345712";
    var password=document.getElementById('pass');
    password.style.backgroundColor=c;

    var p_style=password.style;
    p_style.color="white";


    document.getElementById('p_info').innerHTML="Bonjure";
    // var p_msg=document.getElementById('p_info');
    // p_msg.innerHTML="Namaste";
    console.log(password.value);
}