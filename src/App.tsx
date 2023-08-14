import { Heading } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { AnimationFlexContainer, AnimationItemFlex, MotionFlex } from './animations/MotionFlex'

export const App = () => (
  <MotionFlex initial="hidden" animate="visible" variants={AnimationFlexContainer}>
    <MotionFlex
      variants={AnimationItemFlex}
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      h={'100vh'}
      w={'full'}
      backgroundImage={'banner.jpeg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <InfoIcon boxSize={'5rem'} color={'cyan.300'} />
      <Heading as={'h2'} size={'xl'} fontFamily={'Poppins'} fontWeight={'medium'} mt={6} mb={2}>
        Em breve um novo site pra uma excelente experiência
      </Heading>
    </MotionFlex>
  </MotionFlex>
)
