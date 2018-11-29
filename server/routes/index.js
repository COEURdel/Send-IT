import express from 'express';
import parcelController from '../controllers/parcelControllers';
import userController from '../controllers/userControllers';
import adminController from '../controllers/adminControllers';
import validate from '../helpers/validation';
import verify from '../helpers/verifyToken';

const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).json({ message: 'Welcome to SendIT' }));

router.get('/parcels/:parcelId', verify.isLoggedIn, parcelController.getOneParcel);

router.get('/parcels', verify.isLoggedIn, parcelController.getAllParcels);

router.post('/parcels', verify.isLoggedIn, parcelController.createParcelOrder,);

router.post('/auth/signup', validate.userSignupValidation, userController.createUser,);

router.post('/auth/login', validate.userLoginValidation, userController.loginUser,);

router.all('*', (req, res) => {
  res.status(404).json({
    message: 'This route does not exist',
  });
});

export default router;
