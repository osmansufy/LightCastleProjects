import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ServiceTab() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="service-tab">
      <div className="container">
        <h3 className="mb-4">Our Services</h3>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Strategy Consulting" {...a11yProps(0)} />
            <Tab label="Entrepreneurship Ecosystem" {...a11yProps(1)} />
            <Tab label="Digital" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Strategy Consulting
        </TabPanel>
        <TabPanel value={value} index={1}>
          Entrepreneurship Ecosystem
        </TabPanel>
        <TabPanel value={value} index={2} className="digital-tab">
          <div className="title flex align-center">
            <img
              className="icon"
              src="assets/images/digital-transformation.png"
              alt=""
            />
            <span className="bold">Digital Transformation</span>
          </div>
          <ul className="tab-list">
            <li>Technology for Good</li>
            <li>Advanced Analytics Engine Development</li>
          </ul>
        </TabPanel>
      </div>
    </section>
  );
}
