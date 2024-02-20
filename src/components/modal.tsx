import { FC, ReactNode } from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Center,
} from '@chakra-ui/react';

type transitionPreset = 'scale'  | 'slideInBottom' | 'slideInRight' | 'none';
type size             = 'xs'     | 'sm'            | 'md'           | 'lg'  | 'xl' | 'full';
type scrollBehavior   = 'inside' | 'outside';

interface ModalProps{
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  title: string;
  size?: size;
  transitionPreset?: transitionPreset;
  scrollBehavior?  : scrollBehavior;
  children: ReactNode;
}

export const MyModal:FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    title,
    size,
    transitionPreset, 
    scrollBehavior,
    children 
}) => {  

  return (
    <Modal 
      isCentered
      isOpen={isOpen} 
      onClose={onClose} 
      motionPreset  ={transitionPreset ? transitionPreset : 'scale' } 
      scrollBehavior={scrollBehavior   ? scrollBehavior   : 'inside'} 
      size          ={size             ? size             : 'xl'    }
       
    >
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(2px) hue-rotate(90deg)' />
      
      <ModalContent>
        <ModalHeader className='rounded-tl-lg rounded-tr-lg bg-slate-200'> <Flex justifyContent='center'> {title} </Flex> </ModalHeader>
        <ModalCloseButton />
        <ModalBody> {children} </ModalBody>
        {/* <ModalFooter> 
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};