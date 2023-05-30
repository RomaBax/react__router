import { Box, Flex, Text,GridItem } from "@chakra-ui/react";

export default function Cart() {
    return(
        <GridItem w='100%' h='auto'>
        <Flex alignItems={"center"} justifyContent={"center"} h={"45vh"}>
        <Box className="Cart__item" width={"100%"} height={"500px"}>
            <img src="https://cdna.artstation.com/p/assets/images/images/055/530/878/large/vladimir-kurilov-10.jpg?1667184830" alt="" />
            <Text className="text__carts OPROS">video carta</Text>

            <Text className="text__carts MANEY">Bolimi</Text>

            <div className="blur"></div>
        </Box>
        </Flex>
    </GridItem>
    )
}