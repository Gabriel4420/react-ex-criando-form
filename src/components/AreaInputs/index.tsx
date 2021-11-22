import { ReactNode } from 'react'
import { Container } from './style'

type props = {
    children: ReactNode
}

const AreaInputs = ({children}:props) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default AreaInputs
