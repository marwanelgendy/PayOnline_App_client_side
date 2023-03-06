import React from 'react';
import axios from 'axios';
import noBills from '../imgs/homePage/bill.png'
import Bill from '../components/bill';
import '../styles/pages/billsPage.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Container } from '@mui/system';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useState, useEffect } from 'react';


const BillsPage = () => {
    const [bills, setBills] = useState([]);
    const [filterStyle, setFilterStyle] = useState({ left: '-216px' });

    const openCloseFilters = () => {
        filterStyle.left == '-216px' ? setFilterStyle({ left: '0px' }) : setFilterStyle({ left: '-216px' })
    }

    useEffect(() => {

        const userId = localStorage.getItem('userId')
        axios.get(`http://localhost:4300/getUser/${userId}`)
            .then(response => {
                setBills(response.data.user.bills)
            })

    }, []);

    return (
        <Container maxWidth='xl'>
            <div className='bills-page'>

                <div style={filterStyle} className='filters'>
                    <div onClick={openCloseFilters} className='filter-btn'><FilterAltIcon fontSize='large' /></div>
                    <div className='filter-title'>
                        <FilterAltIcon className='filter-icon' />
                        <p>Filters</p>
                    </div>
                    <FormControl className="category-filter">
                        <FormLabel>Category</FormLabel>
                        <RadioGroup className='filter-container'>
                            <FormControlLabel value="Electric" control={<Radio />} label="Electric" />
                            <FormControlLabel value="Gas" control={<Radio />} label="Gas" />
                            <FormControlLabel value="Clothes" control={<Radio />} label="Clothes" />
                            <FormControlLabel value="Gym" control={<Radio />} label="Gym" />
                            <FormControlLabel value="Grocery" control={<Radio />} label="Grocery" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className="status-filter">
                        <FormLabel>Status</FormLabel>
                        <RadioGroup className='filter-container'>
                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                            <FormControlLabel value="Closed" control={<Radio />} label="Closed" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className="date-filter">
                        <FormLabel>Date</FormLabel>
                        <RadioGroup className='filter-container'>
                            <FormControlLabel value="new" control={<Radio />} label="Newest to Oldest" />
                            <FormControlLabel value="old" control={<Radio />} label="Oldest to Newest" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="bill-container">

                    {bills.length == 0 &&

                        <div className='no-bills'>
                            <img src={noBills} alt="No Bills" />
                        </div>
                    }
                    {bills.length > 0 &&
                        bills.map((bill,index) => (
                            <Bill key={index} bill={bill} />
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default BillsPage;
