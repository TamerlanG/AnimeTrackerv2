import React from 'react'
import { View, Text, Platform } from 'react-native'

import styled from 'styled-components';


export const Canon = styled.Text`
    font-family: 'SFProDisplay-Semibold';
    font-size: 36px;
`

export const DoublePica = styled.Text`
    font-family: 'SFProDisplay-Semibold';
    font-size: 17px;
    color: ${props => props.color ? props.color : 'black'};
`

export const  LongPrimer = styled.Text`
    font-family: 'SFProDisplay-Regular';
    font-size: 16px;
`

export const Minion = styled.Text`
    font-family: 'SFProDisplay-Light';
    font-size: 13px;
`

export const ImageCaption = styled.Text`
    font-family: 'SFProDisplay-Regular';
    font-size: 12px;
    line-height: 16px;
`