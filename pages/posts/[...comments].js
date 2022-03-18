import { useRouter } from "next/router";
import * as React from "react";

const Comment = () => {
    const router = useRouter();
    console.log("==>", JSON.stringify(router.query))
    return (
        <div>
            <h1>This is Comment</h1>
            <p>query: {JSON.stringify(router.query)}</p>
        </div>
    )
}


export default Comment;