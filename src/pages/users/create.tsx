import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { appendErrors, SubmitHandler, useForm } from 'react-hook-form';

import { Header } from "../../componets/Header/index";
import { Input } from "../../componets/Form/Input";
import {Sidebar} from "../../componets/sidebar/index"
import Link from "next/link";


type CreateUserFormData ={
    name: string;
    email: string;
    passaword: string;
    passaword_confirmation: string;
  }
  
  const CreateUserFormFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),  
    email: yup.string().required('E-mail obrigatorio').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatoria').min(6, 'No minimo 6 caracteris'),
    passaword_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')

  })
  
export default function Usercreate(){
    
    const {register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormFormSchema  )
    })
    const {errors} = formState
    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) =>{
        await new Promise(resolver => setTimeout(resolver, 2000))
        console.log(values)
    }
     


    return(
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
         <Sidebar />
         <Box 
         as="form" 
         flex="1" 
         borderRadius={8} 
         bg="gray.800" 
         p={["4","8"]}
         onSubmit={handleSubmit(handleCreateUser)}
         >
           <Heading size="lg" fontWeight="normal">Cria usuario</Heading>

           <Divider my="6" borderColor="gray.700" /> 
           <VStack spacing={["4","8"]}>
               <SimpleGrid 
               minChildWidth="240px" 
               spacing="8"
               w="100%"
               >
                <Input 
                name="name" 
                label="Nome completo" 
                error={errors.name}
                {...register('name')}/>
                <Input 
                name="email" 
                type="email" 
                label="E-mail"
                {...register('email')}
                error={errors.email}

                />
               </SimpleGrid>
               <SimpleGrid 
               minChildWidth="240px" 
               spacing="8"
               w="100%"
               >
                <Input name="password" 
                type="password" 
                label="Senha" 
                error={errors.password}
                {...register('password')}
                />
                <Input 
                name="password_confirmation"
                 type="password"
                  label="Confirmação da senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                  />
               </SimpleGrid>
           
           </VStack>         
             <Flex mt="8" justify="flex-end">
                 <HStack>
                 <Link href="/users" passHref>
                     <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                     </Link>
                     <Button 
                     type="submit" 
                     colorScheme="pink"
                     isLoading={formState.isSubmitting}
                     >
                         Salvar
                    </Button>
                 </HStack>

             </Flex>
         </Box>
         </Flex>
        </Box>
    )
}