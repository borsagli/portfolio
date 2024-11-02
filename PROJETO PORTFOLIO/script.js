document.getElementById('scrollTo').addEventListener('click', function() {
    const target = document.getElementById('about-page');
    target.scrollIntoView({
        behavior: 'smooth' 
    });
});

document.getElementById('scrollToProjetos').addEventListener('click', function() {
    const projetos = document.getElementById('projects-section');
    projetos.scrollIntoView({
        behavior: 'smooth' 
    });
});


document.getElementById('scrollToSobre').addEventListener('click', function() {
    const sobre = document.getElementById('about-page');
    sobre.scrollIntoView({
        behavior: 'smooth' 
    });
});


document.getElementById('scrollToContato').addEventListener('click', function() {
    const contato = document.getElementById('contact-container');
    contato.scrollIntoView({
        behavior: 'smooth' 
    });
    });

    
    var i = 0;
    var txt = 'Lorem ipsum typing effect!'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }