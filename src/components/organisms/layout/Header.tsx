/* eslint-disable react-hooks/exhaustive-deps */
import {memo, useCallback, VFC} from "react";
import {
    Box,
    Flex,
    Heading,
    Link,
    useDisclosure
} from "@chakra-ui/react";
import {MenuIconButton} from "../../atoms/button/MenuIconButton";
import {MenuDrawer} from "../../molcules/MenuDrawer";
import {useHistory} from "react-router-dom";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory()

    const onClickHome = useCallback(() => {
        history.push('/home')
    }, [])

    const onClickUserManagement = useCallback(() => {
        history.push('/home/user_management')
    }, [])

    const onClickSetting = useCallback(() => {
        history.push('/home/setting')
    }, [])

    return (
        <>
            <Flex as='nav' bg='teal.500' color='gray.50' align='center' justify='space-between' padding={{ base: 3, md: 5 }}>
                <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
                    <Heading as='h1' fontSize={{ base: 'md', md: 'lg'}}>
                        User management app
                    </Heading>
                </Flex>
                <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex'}}>
                    <Box pr={4}>
                        <Link onClick={onClickUserManagement}>User index</Link>
                    </Box>
                    <Link onClick={onClickSetting}>Settings</Link>
                </Flex>
                <Flex>
                    <MenuIconButton onOpen={onOpen} />
                </Flex>
            </Flex>
            <MenuDrawer
                onClose={onClose}
                isOpen={isOpen}
                onClickSetting={onClickSetting}
                onClickUserManagement={onClickUserManagement}
                onClickHome={onClickHome}
            />
        </>
    )
})