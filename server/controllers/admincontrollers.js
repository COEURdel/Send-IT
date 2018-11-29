// import db from '../db/index';

// export default{


//     changePresentLoc:(req, res) => {
//         const { id, origin } = req.body;
//         const query = {
//             text: `UPDATE parcels 
//                     SET origin=$1
//                     WHERE userid=$5
//             `,
//             values: [id, origin]
//         }
//         db.query(env.development, query)
//             .then(order => {
//                 order.rows[0] ?
//                     res.status(201).json({ message: "The location was changed" })
//                     :
//                     res.status(404).json({ ...err })
//             })
//             .catch(err => res.status(500).json({ ...err }))
    
//     }
// }



