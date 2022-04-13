import {memo, VFC} from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Link,
    useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Flex as='nav' bg='teal.500' color='gray.50' align='center' justify='space-between' padding={{ base: 3, md: 5 }}>
                <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer' }}>
                    <Heading as='h1' fontSize={{ base: 'md', md: 'lg'}}>
                        User management app
                    </Heading>
                </Flex>
                <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex'}}>
                    <Box pr={4}>
                        <Link>User index</Link>
                    </Box>
                    <Link>Settings</Link>
                </Flex>
                <Flex>
                    <IconButton icon={<HamburgerIcon />} aria-label='menu button' size='sm' variant='unstyled' display={{ base: 'block', md: "none" }} onClick={onOpen} />
                </Flex>
            </Flex>
            <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody p={0} bg='gray.100'>
                            <Button w='100%'>Top</Button>
                            <Button w='100%'>User index</Button>
                            <Button w='100%'>Setting</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
})