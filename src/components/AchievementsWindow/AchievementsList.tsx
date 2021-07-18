import { Center, Flex, Heading, Text, VStack, IconButton, FlexProps } from "@chakra-ui/react";
import React from "react";
import { Cross, DiplomaSmall } from "../../icons/24p";
import AchievementEntity from "./AchievementEntity";

type AchievementsListProps = {
    achievements: AchievementEntity[],
    onDeleteAchievement: (achievement: AchievementEntity) => void;
}

type AchievementsItemProps = {
    achievement: AchievementEntity,
    onDelete: () => void,
}

const AchievementItem = (props: AchievementsItemProps) => {
    const { achievement, onDelete } = props;
    return (
        <Flex w='100%' p='10px' bg='itemBg'
            align='center'
            justify='space-between'
            borderRadius='8px'
        >
            {achievement.icon}
            <Text w='15.5%' color='whiteLargeAlpha'>
                {achievement.name}
            </Text>
            <Text w='70%' color='whiteLargeAlpha'>
                {achievement.description}
            </Text>
            <IconButton
                aria-label='delete-button'
                variant='purpleOutlineIcon'
                size='24px'
                icon={<Cross />}
                onClick={onDelete}
            />
        </Flex>
    );
}

export default function AchievementsList(props: AchievementsListProps & FlexProps) {
    const { achievements, onDeleteAchievement, ...other } = props;

    const NoAchievements = () => (
        <Center h='100%'>
            <Text color='whiteSmallAlpha' fontSize='18px'>
                No achievements have been added
            </Text>
        </Center>
    );

    const Achievements = () => (
        <VStack h='100%' spacing='5px' overflowY='auto'>
            {achievements.map(a =>
                <AchievementItem
                    key={`item-${a.id}`}
                    achievement={a}
                    onDelete={() => onDeleteAchievement(a)}
                />
            )}
        </VStack>
    );

    return (
        <Flex h='210px' direction='column' {...other}>
            <Flex mb='18px'>
                <DiplomaSmall color='whiteLargeAlpha' />
                <Heading as='h3' ml='11px' color='whiteLargeAlpha'
                    fontSize='20px' fontWeight='600'
                    children='Achievements list'
                />
            </Flex>
            {achievements.length === 0
                ?
                <NoAchievements />
                :
                <Achievements />
            }
        </Flex>
    );
}