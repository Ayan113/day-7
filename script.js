<script>
    const passwordBox=document.getElementById("password");
    const length=12;
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789"
    const symbol="@#$%&*(){}[]_+~?/-=";
    const allChars= upperCase + lowerCase + number + sumbol;
    function createPassword(){
        let password = "";
        password +=upperCase[Math.floor(Math.random()*upperCase.length)];
        password +=lowerCase[Math.floor(Math.random()*upperCase.length)];
        password +=number[Math.floor(Math.random()*upperCase.length)];
        password +=symbol[Math.floor(Math.random()*upperCase.length)];
        while (length > password.length){
            password+= allChars(Math.floor(Math.random()*allChars.lenght))

        }
        passwordBox.value=password;

    }
</script>