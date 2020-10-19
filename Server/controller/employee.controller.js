const mongoose = require('mongoose');
const passport = require('passport');

mongoose.set('useFindAndModify', false);

const Employee = mongoose.model('Employee');
const EmpAttendance = mongoose.model('EmpAttend');
const EmpLeave = mongoose.model('EmpLeave');
const EmpMessage = mongoose.model('EmpMessage');
const EmpRequest = mongoose.model('EmpRequest');

module.exports.requestupdate = (req, res, next) => {

    const { id } = req.params;
    console.log('update id ' + id);
    console.log('update id req' + req.params.id);

    var empRequest = new EmpRequest();

    empRequest._id = id;
    empRequest.empEmail = req.body.empEmail;
    empRequest.date = req.body.date;
    empRequest.empName = req.body.empName;
    empRequest.subject = req.body.subject;
    empRequest.request = req.body.request;
    empRequest.requestCheak = "1";

    EmpRequest.findByIdAndUpdate(req.params.id, {$set: empRequest} , {new:true}, (err, doc) => {
        if(!err){ res.send(doc) ;
        console.log('Update SuccesFul')}
        else { console.log('Error In Employee Update' + err );}
    });

        console.log('Update' + update.firstName);
}

module.exports.empRequest = (req,res,next) => {

    var empRequest = new EmpRequest();

    empRequest.empEmail = req.body.empEmail;
    empRequest.date = req.body.date;
    empRequest.empName = req.body.empName;
    empRequest.subject = req.body.subject;
    empRequest.request = req.body.request;
    empRequest.requestCheak = "0";

    empRequest.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if(err.code == 11000)
                res.status(422).send(['Can\'t Submit The Leave Form']);
            else
                return next(err)
        }
    });
}

module.exports.msgdelete = (req, res) => {
    const { id } = req.params;
    EmpMessage.findByIdAndDelete(id).then(employee => {
        return null;
    })
};

module.exports.msgdeupdate = (req, res, next) => {
    console.log('Mes update called')

    const { id } = req.params;
    console.log('update id ' + id);
    console.log('update id req' + req.params.id);

    var empMessage = new EmpMessage();

    empMessage._id = id;
    empMessage.empEmail = req.body.empEmail;
    empMessage.date = req.body.date;
    empMessage.empName = req.body.empName;
    empMessage.subject = req.body.subject;
    empMessage.message = req.body.message;
    empMessage.msgType = req.body.msgType;
    empMessage.msgCheak = "0";

    EmpMessage.findByIdAndUpdate(req.params.id, {$set: empMessage} , {new:true}, (err, doc) => {
        if(!err){ res.send(doc) ;
        console.log('Update SuccesFul')}
        else { console.log('Error In Employee Update' + err );}
    });

        console.log('Update' + update.firstName);
}

module.exports.msgupdate = (req, res, next) => {
    console.log('Mes update called')

    const { id } = req.params;
    console.log('update id ' + id);
    console.log('update id req' + req.params.id);

    var empMessage = new EmpMessage();

    empMessage._id = id;
    empMessage.empEmail = req.body.empEmail;
    empMessage.date = req.body.date;
    empMessage.empName = req.body.empName;
    empMessage.subject = req.body.subject;
    empMessage.message = req.body.message;
    empMessage.msgType = req.body.msgType;
    empMessage.msgCheak = "1";

    EmpMessage.findByIdAndUpdate(req.params.id, {$set: empMessage} , {new:true}, (err, doc) => {
        if(!err){ res.send(doc) ;
        console.log('Update SuccesFul')}
        else { console.log('Error In Employee Update' + err );}
    });

        console.log('Update' + update.firstName);
}

module.exports.msgsend = (req,res,next) => {

    console.log('One msg called');
    var empMessage = new EmpMessage();

    empMessage.empEmail = req.body.empEmail;
    empMessage.date = Date();
    console.log('date had get');
    empMessage.empName = req.body.empName;
    empMessage.subject = req.body.subject;
    empMessage.message = req.body.messeage;
    console.log(
        empMessage.empEmail +
        empMessage.empName +
        empMessage.subject +
        empMessage.message
    );
    empMessage.msgType = "One";
    empMessage.senderemail = "shehan123@gmail.com";
    empMessage.msgCheak = "0";

    empMessage.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if(err.code == 11000)
                res.status(422).send(['Can\'t Submit The Leave Form']);
            else
                return next(err)
        }
    });
}

module.exports.getmsglist = (req, res) => {
    EmpMessage.find().then(empMessage => res.json(empMessage))
};

module.exports.msgsendcate = (req,res,next) => {

    var empMessage = new EmpMessage();

    empMessage.empEmail = "Category";
    empMessage.date = Date();
    empMessage.empName = "Get By System";
    empMessage.subject = req.body.subject;
    empMessage.message = req.body.messeage;
    empMessage.msgType = req.body.msgType;
    empMessage.senderemail = "get by id";
    empMessage.msgCheak = "0";

    empMessage.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if(err.code == 11000)
                res.status(422).send(['Can\'t Submit The Leave Form']);
            else
                return next(err)
        }
    });
}

module.exports.msgsendall = (req,res,next) => {
    console.log("send All");

    var empMessage = new EmpMessage();

    empMessage.empEmail = "All";
    empMessage.date = Date();
    console.log("date iscalled");
    empMessage.empName = "Get From System";
    empMessage.subject = req.body.subject;
    empMessage.message = req.body.messeage;
    empMessage.msgType = "All";
    empMessage.senderemail = "getfrom id";
    empMessage.msgCheak = "0";

    empMessage.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if(err.code == 11000)
                res.status(422).send(['Can\'t Submit The Leave Form']);
            else
                return next(err)
        }
    });
}

module.exports.leaveformdelete = (req, res) => {
    console.log(req);
    const { id } = req.params;
    EmpLeave.findByIdAndDelete(id).then(employee => {
        return null;
    })
};

module.exports.getleavelist = (req, res) => {
    EmpLeave.find().then(leavelist => res.json(leavelist))
};

module.exports.leaveformreject = (req, res, next) => {

    const { id } = req.params;
    console.log('update id ' + id);
    console.log('update id leave' + req.params.id);

    var empLeave = new EmpLeave();

    empLeave._id = id;
    empLeave.leaveCheak = "2";

    EmpLeave.findByIdAndUpdate(req.params.id, {$set: empLeave} , {new:true}, (err, doc) => {
        if(!err){ res.send(doc) ;
        console.log('Update SuccesFul')}
        else { console.log('Error In Employee Update' + err );}
    });

        console.log('Update' + update.firstName);
}

module.exports.leaveformupdate = (req, res, next) => {

    const { id } = req.params;
    console.log('update id ' + id);
    console.log('update id req' + req.params.id);

    var empLeave = new EmpLeave();

    empLeave._id = id;
    empLeave.leaveCheak = "1";

    EmpLeave.findByIdAndUpdate(req.params.id, {$set: empLeave} , {new:true}, (err, doc) => {
        if(!err){ res.send(doc) ;
        console.log('Update SuccesFul')}
        else { console.log('Error In Employee Update' + err );}
    });

        console.log('Update' + update.firstName);
}

module.exports.empleaveformsubmit = (req,res,next) => {

    var empLeave = new EmpLeave();

    empLeave.empEmail = req.body.empEmail;
    empLeave.date = req.body.date;
    empLeave.empName = req.body.empName;
    empLeave.subject = req.body.subject;
    empLeave.reason = req.body.reason;
    empLeave.senderemail = "Senders Email";
    empLeave.leaveCheak = "0";

    empLeave.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if(err.code == 11000)
                res.status(422).send(['Can\'t Submit The Leave Form']);
            else
                return next(err)
        }
    });
}

module.exports.empattendsheet = (req,res,next) => {

    var empAttend = new EmpAttendance();

    empAttend.date = req.body.date;
    empAttend.empName = req.body.empName;
    empAttend.empId = req.body.empId;
    empAttend.empAttendance = req.body.empAttendance;

    empAttend.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if(err.code == 11000)
                res.status(422).send(['Can\'t Submit The Attendace Form']);
            else
                return next(err)
        }
    });
}

module.exports.empregister = (req, res, next) => {

    var employee = new Employee();

    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.city = req.body.city;
    employee.area = req.body.area;
    employee.zipCode = req.body.zipCode;
    employee.empEmail = req.body.empEmail;
    employee.password = req.body.password;
    employee.nicNumber = req.body.nicNumber;
    employee.empPosition = req.body.empPosition;
    employee.basicsal = req.body.basicsal;
    employee.otrate = req.body.otrate;
    employee.bankName = req.body.bankName;
    employee.bankBranch = req.body.bankBranch;
    employee.accNumber = req.body.accNumber;

    console.log(employee);

    employee.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate Email Address Found']);
            else
                return next(err)
        }
    });
}

module.exports.emplist = (req, res) => {
    Employee.find().then(employees => res.json(employees))
};

module.exports.userprof = (req, res) => {
    const { id } = req.params;
    Employee.findById(id).then(employee => {
        return res.json(employee);
    })
};

module.exports.empdelete = (req, res) => {
    const { id } = req.params;
    Employee.findByIdAndDelete(id).then(employee => {
        console.log('Emp Deleted' + id)
        return null;
    })
};

module.exports.empupdate = (req, res, next) => {

    const { id } = req.params;
    console.log('update id ' + id);
    console.log('update id req' + req.params.id);

    var employee = new Employee();

    employee._id = id;
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.city = req.body.city;
    employee.area = req.body.area;
    employee.zipCode = req.body.zipCode;
    employee.empEmail = req.body.empEmail;
    employee.password = req.body.password;
    employee.nicNumber = req.body.nicNumber;
    employee.empPosition = req.body.empPosition;
    employee.basicsal = req.body.basicsal;
    employee.otrate = req.body.otrate;
    employee.bankName = req.body.bankName;
    employee.bankBranch = req.body.bankBranch;
    employee.accNumber = req.body.accNumber;

    console.log(employee.firstName +' ',employee.lastName +' ',employee.city +' ',employee.area +' ',employee.zipCode +' ',employee.empEmail +' ',employee.password +' ',employee.nicNumber +' ',employee.empPosition +' ',employee.basicsal +' ',employee.otrate +' ',employee.bankName +' ',employee.bankBranch +' ',employee.accNumber)

    Employee.findByIdAndUpdate(req.params.id, {$set: employee} , {new:true}, (err, doc) => {
        if(!err){ res.send.doc ;
        console.log('Update SuccesFul')}
        else { console.log('Error In Employee Update' + err );}
    });

        console.log('Update' + update.firstName);
}

module.exports.authenticate = (req, res, next) => {
    console.log('Worked')
    passport.authenticate('local', (err, user, info) => {
        if(err)
            return res.status(400).json(err);
        else if (user)
            return res.status(200).json({ "token": employee.generateJwt() });
        else
            return res.status(404).json(info);
    })(req, res);
}
