import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCaretDown, faCaretUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import { SCREENS } from "../responsive";


const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `};
`;

const ItemContainer = styled.div`
    ${tw`
        flex
        relative
        cursor-pointer
        select-none
    `};
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-1
    `};
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const DateCalendar = styled(Calendar)`
    position: absolute;
    max-width: none;
    user-select: none;
    top: 2em;
    left: 0;

    ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

    @media (min-width: ${SCREENS.md}) {
        top: 3.5em;
        left: -2em;
    }
` as any;

export function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);
    const [time, setTime] = useState();
    const [isTimeOpen, setTimeOpen] = useState(false);

    const options = [
        'Hourly', 'AM', 'PM', '1/2 Day', 'Full Day'
    ];

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if(isReturnCalendarOpen) setReturnCalendarOpen(false);
    };

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen) setStartCalendarOpen(false);
    };

    const toggleTime = () => {
        setTimeOpen(!isTimeOpen);
        if(isTimeOpen) setStartCalendarOpen(false);
        if(isReturnCalendarOpen) setReturnCalendarOpen(false);
    };

    return (
        <CardContainer>
            <ItemContainer onClick={toggleStartDateCalendar}>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isStartCalendarOpen && (
                    <DateCalendar value={startDate} onChange={setStartDate as any} />
                )}
            </ItemContainer>
            <LineSeperator />
            <ItemContainer onClick={toggleReturnDateCalendar}>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isReturnCalendarOpen && (
                    <DateCalendar 
                        offset
                        value={returnDate} 
                        onChange={setReturnDate as any} 
                    />
                )}
            </ItemContainer>
            <LineSeperator />
            <ItemContainer onClick={toggleTime}>
                <Icon>
                    <FontAwesomeIcon icon={faClock} />
                </Icon>
                <Name>Time</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isTimeOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isTimeOpen && (
                    <Dropdown options={options} onChange={setTime as any} value={time} placeholder="Select an option" />
                )}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button text="Book a boat" />
        </CardContainer>
    );
}