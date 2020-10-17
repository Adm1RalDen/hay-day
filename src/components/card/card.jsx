import React from "react";
import {
    AbsoluteContainer,
    CardContainer,
    Icon,
    RelativeContainer,
    SimpleBlock,
    Text,
    UserBlock
} from '../../styles/card'

export const Card = (props) => {


    return (
        <CardContainer>
            <Icon src="img/Apple_Jam.png"/>
            <Text>
                2701
            </Text>
            <UserLine />
            <UserLine />
            <UserLine />
        </CardContainer>
    )
}

const UserLine = (props) => {


    return(
        <UserBlock>
            <SimpleBlock>
            <Text fs="1.5em" style={{marginRight: 10}}>User</Text>
            <RelativeContainer>
                <Icon src="img/lvl.png" w="3em"/>
                <AbsoluteContainer style={{zIndex:123, top: '0.6em', left: "0.8em"}}>
                    <Text fs="1.1em" style={{textShadow: "black 2px 3px 4px"}}>12</Text>
                </AbsoluteContainer>
            </RelativeContainer>
            </SimpleBlock>
            <Text fs="1.5em">
                12332
            </Text>
        </UserBlock>
    )
}
