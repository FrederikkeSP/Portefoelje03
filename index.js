 const buttonLightDark = document.getElementById("lightdarkbtn");
console.log(buttonLightDark)

buttonLightDark.addEventListener("click", function(){
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        buttonLightDark.innerHTML = '🌞LIGHT🌞';
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        buttonLightDark.innerHTML = "🌙 DARK 🌙";
    }
    });

