import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, StyledEngineProvider } from '@mui/material';
import { LineChart, PieChart } from '@mui/x-charts-pro';
import { useState } from 'react';
import Header from '../../Components/Header';
import './styles.css';
import { useSelector } from 'react-redux';
import { decrementNumber, incrementNumber } from '../../Store/Actions/Login';

function Home() {
    const { value } = useSelector((state) => state)
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <div className="MainContainer">
            <Header
                onPressMenu={toggleDrawer(true)}
                onPressMessage={() => alert('message')}
            />
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            How to debug Js Code?
                        </AccordionSummary>
                        <AccordionDetails>
                            If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window:        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            Difference in Arrays Vs Json?
                        </AccordionSummary>
                        <AccordionDetails>
                            Arrays and Objects are data structure to hold your data and JSON is the format to marshal(serialization) or unmarshal (deserialization) data
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Drawer>
            <div>
                <p>{value}</p>
                <Button variant="contained" onClick={() => incrementNumber()}>increment</Button>
                <Button variant="contained" onClick={() => decrementNumber()}>decrement</Button>
            </div>
            <div className="chart">
                <div className="cardView">
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                        series={[
                            {
                                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                                showMark: ({ index }) => index % 2 === 0,
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </div>
                <div className="cardView">
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
