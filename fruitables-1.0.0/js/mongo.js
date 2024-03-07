// ______________________mongose_________________________________
document.addEventListener("DOMContentLoaded", function() {
    const url='mongodb+srv://mambokobia:14217916cC@cluster0.eoy1vl0.mongodb.net/'
    const mongoose= require('mongoose');
    mongoose.connect(url); // Remplacez par votre propre URL
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erreur de connexion a la base de donnees !'));

})
