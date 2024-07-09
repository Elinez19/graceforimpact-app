import { ConnectDB} from  "./libs/config/db"
const { NextResponse } = require("next/server")
const LoadDB = async ()=>{
    await ConnectDB()
}
LoadDB()

async function GET(request){
    console.log("Blog Get hit")
    return NextResponse.json({message: "API is working" })
}

export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get("image");
}