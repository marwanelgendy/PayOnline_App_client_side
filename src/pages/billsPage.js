import React from 'react';
import axios from 'axios';
import noBills from '../imgs/homePage/bill.png'
import Bill from '../components/bill';
import '../styles/pages/billsPage.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Container } from '@mui/system';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BillsPage = () => {
    const [bills, setBills] = useState([]);
    const [billsToShow, setBillsToShow] = useState([]);
    const [filterStyle, setFilterStyle] = useState({ left: '-216px' });
    const [category , setCategory] = useState('')
    const [status , setStatus] = useState('')
    const [date , setDate] = useState('')

    const navigate = useNavigate()

    const openCloseFilters = () => {
        filterStyle.left == '-216px' ? setFilterStyle({ left: '0px' }) : setFilterStyle({ left: '-216px' })
    }

    useEffect(() => {

        const id = localStorage.getItem('userId')
        if(id == null) navigate('/')

        const userId = localStorage.getItem('userId')
        axios.get(`http://localhost:4300/getUser/${userId}`)
            .then(response => {
                setBills(response.data.user.bills)
                setBillsToShow(response.data.user.bills.reverse())
            })

    }, []);

    const categoryFilter = (event)=>{
        setCategory(event.target.value)
    }

    const statusFilter = (event)=>{
        setStatus(event.target.value)
    }
    
    const dateFilter= (event)=>{
        setDate(event.target.value)
    }

   const applyFilter = ()=>{
        let arr = [...bills]

        if(category !== ''){
            arr = arr.filter(bill => bill.category === category)
        }

        if(status !== ''){
            arr = arr.filter(bill => bill.status === status)
        }

        if(date === 'old'){
           arr =  arr.sort(function (a, b) {
            
                let aa = a.issuedDate.split('/');
                let bb = b.issuedDate.split('/');
                return aa[2] - bb[2] || aa[1] - bb[1] || aa[0] - bb[0];
            })
        }

        setBillsToShow([...arr])
   }

   const resetFilter = ()=>{
        setCategory('')
        setStatus('')
        setDate('')

        console.log(bills)

        setBillsToShow([...bills])
   }
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
                        <RadioGroup className='filter-container' onChange={categoryFilter}>
                            <FormControlLabel value="Electric" control={<Radio/>} label="Electric" />
                            <FormControlLabel value="Gas" control={<Radio />} label="Gas" />
                            <FormControlLabel value="Clothes" control={<Radio />} label="Clothes" />
                            <FormControlLabel value="Gym" control={<Radio />} label="Gym" />
                            <FormControlLabel value="Grocery" control={<Radio />} label="Grocery" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className="status-filter" onChange={statusFilter}>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup className='filter-container'>
                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                            <FormControlLabel value="Closed" control={<Radio />} label="Closed" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className="date-filter">
                        <FormLabel>Date</FormLabel>
                        <RadioGroup className='filter-container' onChange={dateFilter}>
                            <FormControlLabel value="new" control={<Radio />} label="Newest to Oldest" />
                            <FormControlLabel value="old" control={<Radio />} label="Oldest to Newest" />
                        </RadioGroup>
                    </FormControl>

                    <Button className='apply-btn' variant='contained' onClick={applyFilter} >Apply</Button>
                    <Button className='reset-btn' variant='contained'onClick={resetFilter} >Reset</Button>
                </div>
                <div className="bill-container">

                    {billsToShow.length == 0 &&

                        <div className='no-bills'>
                            <img src={noBills} alt="No Bills" />
                        </div>
                    }
                    {billsToShow.length > 0 &&
                        billsToShow.map((bill,index) => (
                            <Bill key={index} bill={bill} />
                        ))
                    }

                </div>
            </div>
        </Container>
    );
}

export default BillsPage;
