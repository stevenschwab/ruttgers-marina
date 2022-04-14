import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `};
`;

const OutlinedButton = styled(BaseButton)`
    background-color: #f89420;
    ${tw`
        hover:bg-transparent
        hover:text-black
        hover:border-black
    `};
`;

const FilledButton = styled(BaseButton)`
    background-color: #f89420;
    ${tw`
        border-black
        text-black
        bg-transparent
        hover:bg-black
        hover:text-white
        hover:border-transparent
    `};
`;

export function Button(props: IButtonProps) {

    const { theme, text } = props;

    if(theme === "filled")
        return <FilledButton>{ text }</FilledButton>
    else
        return <OutlinedButton>{ text }</OutlinedButton>
}