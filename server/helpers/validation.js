export default {
  
  createParcelValidation: (req, res, next) => {
    const {
      location, destination, price, departure,
    } = req.body;
    if (
      !location ||
      typeof location !== 'string' || /^\s+|\s+$/g.test(location) === true ||
      location.toString().trim() === ''
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Parcel location is required',
      });
    } else if (
      !destination || /^\s+|\s+$/g.test(destination) === true || typeof destination !== 'string'
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Parcel destination is required',
      });
    } else if (!price || Number.isInteger(price) || /\s/g.test(price) === true) {
      return res.status(400).send({
        valid: false,
        message: 'Price is required',
      });
    } else if (!departure || /^\d{4}[./-]\d{2}[./-]\d{2}$/.test(departure) === false || /^\s+|\s+$/g.test(departure) === true) {
      return res
        .status(400)
        .send({
          valid: false,
          message: 'Departure date is required',
        });
    }
    return next();
  },
  

  parcelOrderValidation: (req, res, next) => {
    const { status } = req.body;
    if (status === undefined || status.toString().trim() === '') {
      return res.status(400).send({
        valid: false,
        message: 'Status should not be empty.',
      });
    }
    if (status !== 'accepted' && status !== 'rejected') {
      return res.status(400).send({
        valid: false,
        message: 'Status can either be accepted or rejected.',
      });
    }
    return next();
  },
  

  userSignupValidation: (req, res, next) => {
    const {
      firstname, lastname, email, location, password,
    } = req.body;
    if (
      !firstname ||
      typeof firstname !== 'string' ||
      firstname.toString().trim() === ''
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Please provide a valid firstname',
      });
    } else if (
      !lastname ||
      typeof lastname !== 'string' ||
      lastname.toString().trim() === ''
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Please provide a valid lastname',
      });
    } else if (
      !email ||
      email.toString().trim() === '' ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Please provide a valid email',
      });
    } else if (
      !location ||
      typeof location !== 'string' ||
      location.toString().trim() === ''
    ) {
      return res.status(400).send({
        valid: false,
        message: 'User location is required',
      });
    } else if (
      !password ||
      password.toString().trim() === '' ||
      /.{11}/g.test(password) ||
      /[<>]/.test(password) === true ||
      /[=]/.test(password) === true
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Please provide a valid password',
      });
    }
    return next();
  },
  

  userLoginValidation: (req, res, next) => {
    const { email, password } = req.body;
    if (
      !email ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false ||
      email.toString().trim() === ''
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Please provide a valid email',
      });
    } else if (
      !password ||
      password.toString().trim() === '' ||
      /.{11/g.test(password) ||
      /[<>]/.test(password) === true ||
      /[=]/.test(password) === true
    ) {
      return res.status(400).send({
        valid: false,
        message: 'Please provide a valid password',
      });
    }
    return next();
  },
};
