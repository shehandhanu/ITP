const express = require('express');
const router = express.Router();

const ctrlEmployee = require('../controller/employee.controller');
// const crtlEmpattendace = require('../controller/empattendance.controller');

router.post('/empregistration', ctrlEmployee.empregister);
router.get('/empprofile/:id' , ctrlEmployee.userprof);
router.delete('/empdelete/:id' , ctrlEmployee.empdelete);
router.put('/empupdate/:id' , ctrlEmployee.empupdate);
router.get('/emplist' , ctrlEmployee.emplist);

router.post('/addattend',ctrlEmployee.empattendsheet);

router.post('/empleaveformsubmit',ctrlEmployee.empleaveformsubmit);
router.put('/leaveformupdate/:id',ctrlEmployee.leaveformupdate);
router.put('/leaveformreject/:id',ctrlEmployee.leaveformreject);
router.get('/getleavelist',ctrlEmployee.getleavelist)
router.delete('/leaveformdelete/:id' , ctrlEmployee.leaveformdelete);

router.post('/msgsend',ctrlEmployee.msgsend);
router.post('/msgsendall',ctrlEmployee.msgsendall);
router.post('/msgsendcate',ctrlEmployee.msgsendcate);
router.put('/msgupdate/:id',ctrlEmployee.msgupdate);
router.put('/msgdeupdate/:id',ctrlEmployee.msgdeupdate);
router.get('/getmsglist',ctrlEmployee.getmsglist);
router.delete('/msgdelete/:id' , ctrlEmployee.msgdelete);

router.post('/emprequest',ctrlEmployee.empRequest);
router.put('/requestupdate/:id',ctrlEmployee.requestupdate);

router.post('/empauthenticate', ctrlEmployee.authenticate);

module.exports = router;