import {useCallback, useState} from "react";
import axios from "axios";
import {User} from "../types/api/user";
import {useHistory} from "react-router-dom";
import {useMessage} from "./useMessage";

export const useAuth = () => {
    const history = useHistory()

    const {showMessage} = useMessage()

    const [loading, setLoading] = useState(false)

    const login = useCallback((id: string) => {
        setLoading(true)

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    showMessage({title: 'success to login', status: "success"})
                    history.push('/home')
                } else {
                    showMessage({title: 'cannot find user', status: "error"})
                }
            })
            .catch(() => {
                showMessage({title: 'cannot login', status: "error"})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [history, showMessage])
    return {login, loading}
}