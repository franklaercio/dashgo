import { FormLabel, FormControl, Input as ChakraInput, InputProps as CharaInputProps } from '@chakra-ui/react';


interface InputProps extends CharaInputProps{
  name: string;
  label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}