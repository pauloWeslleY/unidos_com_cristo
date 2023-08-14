import { Flex, FlexProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionFlex = motion<FlexProps>(Flex)

export const AnimationFlexContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export const AnimationItemFlex = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
