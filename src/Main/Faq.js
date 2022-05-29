import React from 'react';
import {
    Box,
    Text, 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon
} from '@chakra-ui/react';
import Faqs from './faq.json';

const Faq = ({index, setIndex}) => {

  return (
    <div className='faqSection'>
        <Accordion allowToggle index={index}>
            <Text className='question ms-5' fontWeight="semiBold">Hi Robot!</Text>
            {Faqs.map(post => (
                <AccordionItem key = {post.id - 1}>
                    <AccordionButton onClick={() => setIndex(post.id - 1)}>
                        <Box flex="1" textAlign="left">
                            <Text className='question' fontWeight="semiBold">{post.question}</Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <AccordionPanel pb={4}>
                            <strong className='answer'>{post.ans}</strong>
                        </AccordionPanel>
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default Faq;
