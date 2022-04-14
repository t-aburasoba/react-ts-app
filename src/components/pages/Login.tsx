import {memo, VFC} from "react";
import {Box, Divider, Flex, Heading, Input, Stack} from "@chakra-ui/react";
import {PrimaryButton} from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
    return (
        <Flex align='center' justify='center' height='100vh'>
            <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
                <Heading as='h1' size='lg' textAlign='center'>
                    User management app
                </Heading>
                <Divider my={4} />
                <Stack spacing={3} py={4} px={10}>
                    <Input placeholder='User id' />
                    <PrimaryButton>Login</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})