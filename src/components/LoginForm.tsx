'use client'

import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    PopoverTrigger,
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverCloseButton,
    PopoverArrow,
    PopoverBody,
    VStack,
    Text,
    useDisclosure,
    InputGroup,
    InputRightElement,
    Portal,
  } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginForm } from '@/store/ui/login-form.store';
import { GoogleIcon, HidePassIcon, ShowPassIcon } from './icons';
import EmailPopoverForm from './popover-email-form';

type Inputs = {
    email:string
    password: string
}

export default function LoginForm() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting, },
      } = useForm<Inputs>({
        defaultValues: { email: '', password: ''},
        mode: 'onChange'
      });

    const show    = useLoginForm(state => state.show);
    const setShow = useLoginForm(state => state.setShow);
    const { onOpen, onClose, isOpen } = useDisclosure();
    
    const onSubmit:SubmitHandler<Inputs> = (values) => {
        return new Promise((resolve) => {
            setTimeout(() => {            
                resolve( console.log(values))
            }, 1500)
        })
    }
    
    const handleShowPass = () => setShow();

    

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className='mb-4' isInvalid={errors.email}>
                <FormLabel htmlFor='email'>Ingrese su correo</FormLabel>
                <Input
                    id='email'
                    placeholder='ej: usuario@gmail.com'
                    bg='white'
                    color='black'
                    {...register('email', {
                        required: 'Campo requerido',
                        pattern:  { value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Correo inválido'},
                    })}
                />
                <FormErrorMessage color='orange'>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl className='mb-4' isInvalid={errors.password}>
                <FormLabel htmlFor='Inserte su contraseña'>Ingrese su contraseña</FormLabel>
                <InputGroup size='md'>
                    <Input
                        id='password'
                        placeholder='******'
                        type={show ? 'text' : 'password'}
                        // variant='flushed'
                        bg='white'
                        color='black'
                        {...register('password', {
                            required: 'Campo requerido',
                            minLength: { value: 4, message: 'Mínimo de caracteres: 4' },
                        })}
                    />
                    <InputRightElement width='3rem'>
                        <Button h='1.75rem' size='xs' color='teal' colorScheme='whiteAlpha' onClick={handleShowPass}>
                            {show ? <HidePassIcon/> : <ShowPassIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <FormErrorMessage color='orange'>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            
            <VStack spacing={4} mt={12}>
                <Popover 
                    isLazy
                    placement='top-start' 
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                >
                    <PopoverTrigger>
                        <Button 
                            mb={2} 
                            color='white'
                            variant='link'  
                            type='button'
                        >
                            Olvidé mi contraseña
                        </Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent color='white' bg='#244B5A' borderColor='blue.800'>
                            <PopoverHeader fontWeight='semibold'>Ingrese su correo</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <EmailPopoverForm onClose={onClose}/>  
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

                <Button size='lg' colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Ingresar 
                </Button>
                <Button leftIcon={<GoogleIcon />} type='button' colorScheme='whiteAlpha'>
                    Ingresar con Google
                </Button>
            </VStack>
        </form>
    )
}