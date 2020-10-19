const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var empSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required : 'First Name Can\'t be Empty',
    },
    lastName: {
        type: String,
        required : 'Last Name Can\'t be Empty'
    },
    city: {
        type: String,
        required : 'City Can\'t be Empty'
    },
    area: {
        type: String,
        required : 'Area Can\'t be Empty'
    },
    zipCode: {
        type: String,
        required : 'Zip Code Can\'t be Empty'
    },
    empEmail: {
        type: String,
        required : 'Email Address Can\'t be Empty',
        
    },
    password: {
        type: String,
        required : 'Password Can\'t be Empty',
        minlength : [8, 'Password Must Have 8 Characters']
    },
    nicNumber: {
        type: String,
        required : 'NIC Number Can\'t be Empty',
        minlength : [10, 'NIC Must Include 10 Characters']
    },
    empPosition: {
        type: String,
        required : 'Position Title Can\'t be Empty',
    },
    basicsal: {
        type: String,
        required : 'basic Sal Can\'t be Empty'
    },
    otrate: {
        type: String,
        required : 'ot rate Can\'t be Empty'
    },
    bankName: {
        type: String,
        required : 'Bank Name Can\'t be Empty'
    },
    bankBranch: {
        type: String,
        required : 'Bank Branch Can\'t be Empty'
    },
    accNumber: {
        type: String,
        required : 'Account Number Can\'t be Empty',
        unique : true
    },

});

var empattend = new mongoose.Schema({
        date: {
            type: String,
            required : 'Date Can\'t be Empty',
        },
        empName: {
            type: String,
            required : 'Employee Name Can\'t be Empty'
        },
        empId: {
            type: String,
            required : 'Employee ID Can\'t be Empty'
        },
        empAttendance: {
            type: String,
            required : 'Employee Attendance Can\'t be Empty'
        },
});

var empattend = new mongoose.Schema({
    date: {
        type: String,
        required : 'Date Can\'t be Empty',
    },
    empName: {
        type: String,
        required : 'Employee Name Can\'t be Empty'
    },
    empId: {
        type: String,
        required : 'Employee ID Can\'t be Empty'
    },
    empAttendance: {
        type: String,
        required : 'Employee Attendance Can\'t be Empty'
    },
});

var empleave = new mongoose.Schema({
    empEmail: {
        type: String,
        required : 'Employee ID Can\'t be Empty'
    },
    date: {
        type: String,
        required : 'Date Can\'t be Empty',
    },
    empName: {
        type: String,
        required : 'Employee Name Can\'t be Empty'
    },
    senderemail: {
        type: String,
        required : 'sender Email Can\'t be Empty'
    },
    subject: {
        type: String,
        required : 'select Attendance Can\'t be Empty'
    },
    reason: {
        type: String,
        required : 'reason Attendance Can\'t be Empty'
    },
    leaveCheak: {
        type: String,
        required : 'leave check Attendance Can\'t be Empty'
    },
});

var empMessage = new mongoose.Schema({
    empEmail: {
        type: String,
        required : 'Employee email Can\'t be Empty'
    },
    date: {
        type: String,
        required : 'Date Can\'t be Empty',
    },
    empName: {
        type: String,
        required : 'Employee Name Can\'t be Empty'
    },
    senderemail: {
        type: String,
        required : ' senderemail Can\'t be Empty'
    },
    subject: {
        type: String,
        required : 'Employee subject Can\'t be Empty'
    },
    message: {
        type: String,
        required : 'Employee message Can\'t be Empty'
    },
    msgCheak: {
        type: String,
        required : 'Employee msgcheck Can\'t be Empty'
    },
    msgType: {
        type: String,
        required : 'Employee msgtype Can\'t be Empty'
    },
});

var empRequest = new mongoose.Schema({
    empEmail: {
        type: String,
        required : 'Employee ID Can\'t be Empty'
    },
    date: {
        type: String,
        required : 'Date Can\'t be Empty',
    },
    empName: {
        type: String,
        required : 'Employee Name Can\'t be Empty'
    },
    subject: {
        type: String,
        required : 'Employee subject Can\'t be Empty'
    },
    request: {
        type: String,
        required : 'Employee request Can\'t be Empty'
    },
    requestCheak: {
        type: String,
        required : 'Employee check Can\'t be Empty'
    },
});

empSchema.path('empEmail').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid Email.')

empSchema.method.verifyPassword = function (password){
    console.log('not this much');
    return compareSync(password, this.password);
};

empSchema.method.generateJwt = function(){
    return jwt.sign({_id: this._id}, 
        process.env.JWT_SECRET);
};

mongoose.model('Employee', empSchema );
mongoose.model('EmpAttend', empattend);
mongoose.model('EmpLeave', empleave);
mongoose.model('EmpMessage', empMessage);
mongoose.model('EmpRequest', empRequest);