import {useCallback, useState} from "react";
import axios from "axios";
import {User} from "../types/api/user";
import {useHistory} from "react-router-dom";
import {useMessage} from "./useMessage";
import {useLoginUser} from "./useLoginUser";

export const useAuth = () => {
    const history = useHistory()

    const {showMessage} = useMessage()

    const [loading, setLoading] = useState(false)

    const {setLoginUser} = useLoginUser()

    const login = useCallback((id: string) => {
        setLoading(true)

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    const isAdmin = res.data.id === 10
                    setLoginUser({...res.data, isAdmin})
                    showMessage({title: 'success to login', status: "success"})
                    history.push('/home')
                } else {
                    showMessage({title: 'cannot find user', status: "error"})
                    setLoading(false)
                }
            })
            .catch(() => {
                showMessage({title: 'cannot login', status: "error"})
                setLoading(false)
            })
    }, [history, showMessage, setLoginUser])
    return {login, loading}
}