import register from "../db/register.js";

async function postData(req,res) {
    
    const data = new register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailid: req.body.emailid,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    try
    {
        if(req.body.password == req.body.confirmPassword)
        {
            const actual_data = await data.save();
            res.json(actual_data);
        }
        else
        {
            return res.status(400).json({   
                message: "Password and confirm password are not matched"
            });
        }
        
    }
    catch(error)
    {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

async function getData(req,res) {
    try
    {
        const data = await register.find();
        return res.json(data);
    }
    catch(error)
    {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

export default {postData,getData}