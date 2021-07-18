import { Flex, IconButton, Heading, Button, Spacer, useToast, HStack, FlexProps } from "@chakra-ui/react";
import React, { useState } from "react";
import { Cross, TrophySmall } from "../../icons/24p";
import ToastUndoDelete from "../ToastUndoDelete";
import AchievementEntity from "./AchievementEntity";
import AchievementsList from "./AchievementsList";
import FormForAchievement from "./FormForAchievement";

export default function AchievementsWindow() {
    const [achievements, setAchievements] = useState<AchievementEntity[]>([]);
    const toast = useToast();

    const handleAddAchievement = (achievement: AchievementEntity) => {
        setAchievements(value => [...value, achievement]);
    };

    const handleDeleteAchievement = (achievement: AchievementEntity) => {
        setAchievements(value => value.filter(a => a.id !== achievement.id));
        const toastId = toast({
            render: () =>
                <ToastUndoDelete onUndoDelete={() => {
                    toast.close(toastId!);
                    setAchievements(value => [...value, achievement]);
                }} />,
        });
    };

    const AchievementsWindowHeader = (props: FlexProps) => (
        <Flex align='center' {...props}>
            <HStack spacing='16px'>
                <TrophySmall color='mainPurple' boxSize='32px' />
                <Heading as='h1'
                    color='whiteLargeAlpha'
                    fontSize='32px'
                    children='Achievements'
                />
            </HStack>
            <Spacer />
            <IconButton aria-label='close-button'
                variant='purpleOutlineIcon'
                icon={<Cross boxSize='32px' />}
            />
        </Flex>
    );

    const ExitButtons = () => (
        <HStack h='52px' spacing='32px' direction='row' justify='flex-end'>
            <Button h='100%' variant='purpleOutline'>Cancel</Button>
            <Button h='100%' variant='purpleSolid'>Apply</Button>
        </HStack>
    );

    return (
        <Flex w='960px' h='540px' p='32px' borderRadius='16px'
            bg='windowBg' direction='column' justify='center'
        >
            <AchievementsWindowHeader mb='48px' />
            <FormForAchievement
                mb='32px'
                onAddAchievement={handleAddAchievement}
            />
            <AchievementsList
                mb='24px'
                achievements={achievements}
                onDeleteAchievement={handleDeleteAchievement}
            />
            <ExitButtons />
        </Flex>
    );
}