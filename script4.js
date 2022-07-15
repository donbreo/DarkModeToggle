 toggleSwitch = document.querySelector('input[type="checkbox"]');
 nav = document.getElementById('nav');
 toggleIcon = document.getElementById('toggle-icon');
 image1 = document.getElementById('img1'); // replacing the images
 image2 = document.getElementById('img2');
 textBox = document.getElementById('text-box');
 homeID = document.getElementById('home');


// Try using DRY method - the following darkMode() and lightMode() have repeated codes

//for dark or light images



//DarkMode function
function darkMode()
{
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // toggleIcon.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent='Dark Mode';
    
    // Instead of Remove and Add - try Replace
    // do the same in lightMode()
     // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon');
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    toggleIcon.children[1].style.color = 'rgb(255 255 255 / 50%)';
    //The images here will be placed in imageMode()
    // img1.src = '../undraw_multitasking_re_ffpb_2.svg';
    // img2.src = '../undraw_multitasking_re_ffpb (1).svg';
    //  document.body.style.backgroundImage = "url('../Wallpaper.jpeg')";

    
}

//LightMode function
function lightMode()
{
    nav.style.backgroundColor = 'rgb(255 255 255 / 85%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 80%)';
    // toggleIcon.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent='Light Mode';
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    toggleIcon.children[1].style.color = 'rgb(0 0 0 / 80%)';
    document.body.style.backgroundImage;

}

// Function to switch Theme Dynamically
function switchTheme(event)
{
    console.log(event.target.checked);
    if(event.target.checked)
    {
        //if statement to set attribute to dark mode if statement turns out true
        //data-theme is the key that links the script with the CSS and key is the value
        document.documentElement.setAttribute('data-theme','dark');
        // localStorage.setItem('theme', 'dark');  
        darkMode();
    }
    else
    {
        document.documentElement.setAttribute('data-theme', 'light');
        // localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// imageMode(color)
// {
//         //converting the single quotes with back ticks (under esc) to convert it into a template string
//         //want to pass in a variable instead of harcoding a file
//     img1.src = `../undraw_game_world_re_dark.svg`;
//     img2.src = `../undraw_well_done_re_dark.svg`;
// }

toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme





// $('body').on('click', 'js-turnoff-btn', function(){$('.lamp-light').toggleClass('open');});