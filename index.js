function validerFormulaire() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    
    alert(`Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}`);
}