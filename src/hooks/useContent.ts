import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [content, setContents] = useState([])

    function refresh() {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(response => {
            setContents(response.data.content)
        })
    }

    useEffect(() => {
        refresh();
    })

    return {content, refresh}

}