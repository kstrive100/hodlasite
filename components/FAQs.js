import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import faqTexts from '@/utils/faqTexts.json'
import { formula, montserrat } from '@/utils/fonts'

import styles from '@/styles/faq.module.css'

const StyledAccordion = styled(Accordion)({
  borderBottom: '1px solid #494949',
  '&:first-of-type': {
    borderTop: '1px solid #494949',
  }
});  

export default function FAQs() {
  return (
    <div className={styles.main}>
      <div className={styles.firstTitle}>
        <h1 className={formula.className}>FAQ</h1>
      </div>
      <div className={styles.accordions}>
        {faqTexts.map((item, index) => (
          <StyledAccordion key={index} className={styles.sections}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.expand_icon}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.summary}
            >
              <Typography className={`${styles.title} ${montserrat.className}`}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.text} ${montserrat.className}`}>
              {item.text}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          ))
        }
      </div>
    </div>
  );
}