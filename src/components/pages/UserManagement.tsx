import {memo, useCallback, useEffect, VFC} from "react";
import {
    Center,
    Spinner,
    useDisclosure,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {UserCard} from "../organisms/user/UserCard";
import {useAllUsers} from "../../hooks/useAllUsers";
import {UserDetailModal} from "../organisms/user/UserDetailModal";
import {useSelectUser} from "../../hooks/useSelectUser";
import {useLoginUser} from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
    const {getUsers, loading, users} = useAllUsers()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {onSelectUser, selectedUser} = useSelectUser()
    const {loginUser} = useLoginUser()

    useEffect(() => {
        getUsers()
    }, [getUsers])

    const onClickUser = useCallback((id: number) => {
        onSelectUser({id, users})
        onOpen()
    }, [users, onSelectUser, onOpen])

    return (
        <>
            {
                loading ? (
                    <Center height='100vh'>
                        <Spinner />
                    </Center>
                ) : (
                    <Wrap p={{ base: 4, md: 10 }}>
                        {users.map((user) => (
                            <WrapItem key={user.id} mx='auto'>
                                <UserCard imageUrl='https://source.unsplash.com/random' userName={user.username} fullName={user.name} onClick={onClickUser} id={user.id} />
                            </WrapItem>
                        ))}
                    </Wrap>
                )
            }
            <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
        </>
    )
})