import { NextResponse } from "next/server"

export async function GET(req){
    const user={
        name:'folly',
        email:'folly@'
    }
    return NextResponse.json(user)
}
export async function POST(req){
    const user={
        name:'folly',
        email:'folly@'
    }
    return NextResponse.json(user)
}