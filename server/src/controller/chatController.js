import {chatClient} from "../lib/stream.js"


export async function getStreamToken(req,res){
    try{
        const token = chatClient.createToken(req.user.clerkId)
        res.send(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.userName,
            userImage: req.user.image
        })
    } catch(error){
             console.log("Enter in getStreamToken:",error.message);
             res.status(500).json({message:"Internal Server Error"});
    }
}