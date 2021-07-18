import { Button, Flex, FlexProps, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import createGuid from "../../helpers/createGuid";
import { Plus } from "../../icons/24p";
import { Diploma, Medal, Medal01, Medal02, Medal03, Trophy } from "../../icons/32p";
import SelectIcon from "../SelectIcon";
import AchievementEntity from "./AchievementEntity";

type FormForAchievementProps = {
    onAddAchievement: (achievement: AchievementEntity) => void,
}

type FormState = {
    iconId: number,
    name: string,
    description: string
}

const defaultFormState = (): FormState =>
    ({ iconId: 0, name: '', description: '' });

const icons = [
    { icon: <Medal01 />, name: 'Medal 1' },
    { icon: <Medal02 />, name: 'Medal 2' },
    { icon: <Medal03 />, name: 'Medal 3' },
    { icon: <Trophy />, name: 'Trophy' },
    { icon: <Diploma />, name: 'Diploma' },
    { icon: <Medal />, name: 'Medal' },
];

export default function FormForAchievement(props: FlexProps & FormForAchievementProps) {
    const { onAddAchievement, ...other } = props;
    const [formState, setFormState] = useState<FormState>(defaultFormState());

    const handleSelectIcon = (iconId: number) => {
        setFormState({ ...formState, iconId, name: icons[iconId].name });
    }

    const handleAddAchievement = () => {
        onAddAchievement({
            id: createGuid(),
            icon: icons[formState.iconId].icon,
            ...formState
        });
        setFormState(defaultFormState());
    }

    return (
        <Flex h='52px' justify='space-between' {...other}>
            <SelectIcon
                size='52px'
                currentIconId={formState.iconId}
                icons={icons.map(i => i.icon)}
                onSelectIcon={handleSelectIcon}
            />
            <Input
                w='13.5%' h='100%'
                variant='purpleOutline'
                placeholder='Placement'
                value={formState.name}
                onChange={({ target }) =>
                    setFormState({ ...formState, name: target.value })}
            />
            <Input
                w='57.5%' h='100%'
                variant='purpleOutline'
                placeholder='Competition, Level, Event'
                value={formState.description}
                onChange={({ target }) =>
                    setFormState({ ...formState, description: target.value })}
            />
            <Button
                h='100%'
                variant='purpleSolid'
                onClick={handleAddAchievement}
                children={<Plus />}
            />
        </Flex >
    );
}