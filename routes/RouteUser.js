const express =require (express)
const router =express.Router()


// routes

// la route de GET  pour récupérer tous les utilisateur  

router.get(`/express/users`,  (req, res)=> {
    const query =`SELECT *FROM users`;
    connection.query(query, (err, row) =>{
        if (err){
            console.error('Erreur de la récuperation des utilisateurs:' , err);
            res.status(500).json({
                error : 'erreur de serveur d\'un ajout d\'un nouveau utilisateur'
             })
            return;
        };
    });

 });
 

//  la routes POST pour ajouter un nouveau utilisateur


router.post(`/express/users`,  (req, res)=> {
    const { first_name, last_name, email, age } =req.body;
    const query= `INSERT INTO user(firs_name, last_name, email, age) VALEUS (?,?,?,?)`;
    const values =[first_name, last_name, email, age];
    
    connection.query(query, values, (err, result ) =>{
        if (err){
            console.error('Erreur lors de l\'ajout d\'un nouveau utilisateur:' , err);
            res.status(500).json({
                error : 'erreur de serveur d\'un ajout d\'un nouveau utilisateur'
             })
            res.json({message: `Utilisateur ajouté avec succès`, id: result.inserdtlId})
        };
    });

 });


export default router