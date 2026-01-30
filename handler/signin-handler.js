import register from "../db/register.js";

async function verifydata(req,res) {
    try
    {
        const {emailid,password} = req.body;

        if(!emailid || !password)
        {
            return res.status(400).json({
                message:"Email and password are required"
            })
        }
        
        const user = await register.findOne({emailid});

        if(!user)
        {
            return res.status(404).json({
            message: "User not found"
        });
        }
        if(user.emailid == req.body.emailid && user.password == req.body.password)
        {
            return res.status(200).json({
            message: "Login Success"
        });
        }
        else
        {
            return res.status(401).json({
            message: "Invalid username or password"
        });
        }
    }
    catch(error)
    {
        return res.status(401).json({
            message: "Something went wrong"
        });
    }
}

export default {verifydata}