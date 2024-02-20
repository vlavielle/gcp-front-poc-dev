'use client'

import {
  Button,
  FormControl,
  Input,
  Text,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { ZodError, z } from 'zod';

const schema = z.object({
  email: z
    .string()
    .min(1,'Debe insertar su dirección de correo')
    .email('El formato de su correo es inválido')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i, 'Formato de correo electrónico inválido'),
});

export default function EmailPopoverForm({onClose}:{onClose:() => void}) {    
  const emailRef = useRef(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    try {
      const email = emailRef.current?.value;
      schema.parse({ email });
      console.log(emailRef.current?.value);
      onClose(); 
    } catch (err) {
      if (err instanceof ZodError) {
        setError(err.errors[0].message); 
      } else {
        setError('Error de validación desconocido');
      }
    }

  }

  return (     
    <>
      <FormControl>
          <Input
            ref={emailRef}
            type="email" 
            name='email'
            placeholder='usuario@gmail.com'
            bg='white'
            color='black'
            title="Por favor, introduzca una dirección de correo electrónico válida"
          />
            {error && <Text fontSize='12' color='orange'> {error} </Text>}              
      </FormControl>

      <Button 
          mt={4} 
          colorScheme='teal' 
          variant='solid' 
          size='xs' 
          type='button'
          onClick={onSubmit}
      >
          Enviar
      </Button>
    </>  
    
  )
}