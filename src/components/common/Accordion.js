import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function InteractiveList({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <AccordionWrapper
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      {children}
    </AccordionWrapper>
  );
}

InteractiveList.propTypes = {
  title: PropTypes.object,
  children: PropTypes.array,
};

const AccordionWrapper = styled(Accordion)`
  box-shadow: none;

  :before {
    opacity: 0 !important;
  }
`;
