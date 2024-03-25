'use client';

import React from 'react'
import { UserInputs } from './UserInput'
import {styled } from 'styled-components'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: red;
  margin-bottom: 1.5rem;
`

const page = () => {
  return (
    <div>
          <UserInputs/>
    </div>
  )
}

export default page