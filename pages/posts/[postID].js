import { useRouter } from "next/router";
import * as React from "react";

const PostID = () => {
    const router = useRouter();
    console.log("==>", router.query);
    return (
        <div>
            <h1>This is PostID</h1>
            <p>query: {JSON.stringify(router.query)}</p>
        </div>
    )
}


export default PostID;