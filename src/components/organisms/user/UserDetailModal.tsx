import {memo, VFC} from "react";
import {
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
} from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const {isOpen, onClose} = props
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay/>
            <ModalContent pb={6}>
                <ModalHeader>User detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input value='aburasoba' isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>fullname</FormLabel>
                            <Input value='t.tsubasa' isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mail</FormLabel>
                            <Input value='mail' isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Tel</FormLabel>
                            <Input value='tell' isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
})
