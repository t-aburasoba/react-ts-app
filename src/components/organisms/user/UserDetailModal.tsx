import {ChangeEvent, memo, useEffect, useState, VFC} from "react";
import {
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
} from "@chakra-ui/react";
import {User} from "../../../types/api/user";
import {PrimaryButton} from "../../atoms/button/PrimaryButton";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    isAdmin?: boolean;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const {user, isOpen, onClose, isAdmin=false} = props
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        setName(user?.name ?? '')
        setUsername(user?.username ?? '')
        setPhone(user?.phone ?? '')
        setEmail(user?.email ?? '')
    }, [user])

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onClickUpdate = () => {
        alert('Update !')
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay/>
            <ModalContent pb={2}>
                <ModalHeader>User detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUserName} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>fullname</FormLabel>
                            <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mail</FormLabel>
                            <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Tel</FormLabel>
                            <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                {isAdmin && (
                    <ModalFooter>
                        <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    )
})
