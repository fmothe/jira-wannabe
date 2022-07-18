import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";




const checkMongoIdRegExp = new RegExp("^[0-9a-fA-F]{24}$");

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname.startsWith('/api/entries/')){
        const id = request.nextUrl.pathname.replace('/api/entries/', '');
        if(!checkMongoIdRegExp.test(id)){
            const url = request.nextUrl.clone();
            url.pathname = '/api/bad-request';
            url.search =`?message=${id} is not a valid mongo id`

            return NextResponse.rewrite(url)

        }
    }
    


    return NextResponse.next();
}


export const config = {
    matcher: [
        // '/api/:path', 
        '/api/entries/:path'
    ],
}