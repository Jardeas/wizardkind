# De dev branch is de branch vanwaar we gaan aftakken.
Dus maken we bv een nieuwe pagina dat nieuwe css en js nodig heeft maken we een nieuwe branch aan

 # AANMAKEN NIEUWE BRANCH
 Je start altijd vanuit de 'dev' branch.
    "git checkout dev"

daarna maak je een nieuwe branch aan
    "git checkout -b koffer"

nieuwe pagina -> koffer.html
nieuwe scss -> _koffer.scss
nieuwe js -> koffer.js

daarna add, commit en push de koffer branch
Daarna maak je een nieuwe branch
Werk je in de css
    "git checkout -b koffer/css"
Wil je nieuwe branch maken voor de js 
    "git checkout -b koffer/js"

Ben je klaar met je code ga ik hem mergen.