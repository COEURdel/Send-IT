import db from '../db/index';

export default {
  
  getAllParcels: (req, res) => {
    const text = 'SELECT * FROM parcels';
    db.query(text, (err, result) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Parcels retrieved successfully',
        parcels: result.rows,
      });
    });
  },
  
  getOneParcel: (req, res) => {
    const parcelId = parseInt(req.params.parcelId, 10);
    db.query('SELECT * FROM parcels WHERE id=$1',[parcelId],(err, result) => {
        if (err) {
          return res.status(404).json({
            success: false,
            message: 'Specified parcel not found',
          });
        } else if (result.rowCount === 0) {
          return res.status(404).json({
            success: false,
            message: 'Specified parcel with that id does not exist',
          });
        }
        const parcelResult = result.rows;
        return res.status(200).json({
          success: true,
          message: 'Parcel retrieved successfully',
          parcel: parcelResult,
        });
      },
    );
  },


  createParcelOrder: (req, res) => {
    const text = 'INSERT INTO parcels(location, destination, price, departure, userid) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const { location, destination, price, departure, } = req.body;
    const { userid } = req;
    db.query(text, [location, destination, price, departure, userid], (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Invalid order, Can\'t create a new parcel',
        });
      }
      const parcelResult = result.rows[0];
      if (result) {
        return res.status(201).json({
          success: true,
          message: 'Parcel created successfully',
          parcel: parcelResult,
        });
      }
      return null;
    });
  },

//   changeParcelDestination:(req, res) => {
//     const { id, destination } = req.body;
//     const query = {
//         text: `UPDATE parcels 
//                 SET destination=$2
//                 WHERE userid=$5
//         `,
//         values: [id, destination]
//     }
//     db.query(env.development, query)
//         .then(order => {
//             order.rows[0] ?
//                 res.status(201).json({ message: "The destination was changed" })
//                 :
//                 res.status(404).json({ ...err });
//         })
//         .catch(err => res.status(500).json({ ...err }))

// },

// getParcelOrderByUser:(req, res) => {
//     const id = req.user.user_id;
//     const query = {
//         text: `SELECT * FROM parcels WHERE userid = $5`,
//         values: [id]
//     }
//     db.query(env.development, query)
//         .then(parcels => {
//             !parcels.rows.length === 0 ?
//                 res.status(200).json({ ...parcels.rows })
//                 :
//                 res.status(404).json({ message: 'You did not found parcel delivery orders' })
//         })
//         .catch(err => res.status(500).json({ ...err }))
// },

// cancelParcelOrder(req, res) {
//     const { id } = req.params;
//     const status = "Canceled";
//     const query = {
//         text: `UPDATE orders 
//                 SET status=$1
//                 WHERE order_ref=$2`,
//         values: [status, id]
//     }
//     db.query(env.development, query)
//         .then(order => {
//             order.rows[0] ?
//                 res.status(201).json({ message: "Parcel order was canceled" })
//                 :
//                 res.status(404).json({ ...err })
//         })
//         .catch(err => res.status(500).json({ ...err }))
// },

};
