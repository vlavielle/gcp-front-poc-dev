'use client'

import { ReactNode } from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

export default function CustomCard({children, title}: {children:ReactNode, title:string}) {
    return(
        <Card color='white' className="card-banner py-[4rem] px-[1rem] md:px-[2rem] lg:px-[3rem] min-w-[500px]">
            <CardHeader className="text-center mb-4">
                <Heading as='h2' size='3xl' className='text-yellow-300' > {title} </Heading>
            </CardHeader>
            <CardBody >
                <section className="py-8 px-16">
                    {children}
                </section>
            </CardBody>
        </Card>
    )
}
