import React from 'react'
import styled from 'styled-components';

export const Container = styled.View`
    margin-left: 28px;
    margin-right: 22px;
    margin-top: 18px;
    overflow: visible;
`

export const Inner = styled.View`
    ${props =>  props.style};
    flexDirection: ${props => props.row ? 'row' : 'column'};
`