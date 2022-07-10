import React, {useState} from 'react'
import './Home.css'
import {Button, MenuItem, TextField} from "@mui/material";
import Categories from '../../Data/Categories';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {useNavigate} from 'react-router-dom'

const Home = ({name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true)

        } else {
            setError(false)
            fetchQuestions(category,difficulty)
            navigate('/quiz')
        }
    }

        return (
            <div className="content">
                <div className="settings">
                <span style={{fontSize: 30}} >Quiz Settings</span>

                    <div className="settings_select">
                        {error && <ErrorMessage>Please complete all the fields.</ErrorMessage>}
                        <TextField label='Enter Your Name'
                        variant='outlined' style={{marginBottom: 25}}
                                   onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            select
                            label='Select Category'
                            variant='outlined' style={{marginBottom: 30}} value={category}
                                onChange={(e) => setCategory(e.target.value)}
                        >

                            {Categories.map((cat) => (
                                <MenuItem key={cat.category}
                                value={cat.value}
                                >{cat.category}</MenuItem>
                                ))}
                        </TextField>
                        <TextField
                        select label="Select Difficulty" variant="outlined" style={{marginBottom: 30}} value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <MenuItem key="Easy" value="easy">
                                Easy
                            </MenuItem>
                            <MenuItem key="Medium" value="medium">
                                Medium
                            </MenuItem>
                            <MenuItem key="Hard" value="hard">
                                Hard
                            </MenuItem>
                        </TextField>
                        <Button variant="contained" color="secondary" size="large" onClick={handleSubmit}
                        >Start Quiz!</Button>
                    </div>
            </div>
                <img src='https://www.dropbox.com/s/77lczja9pckm0gs/quizb%20copy.svg?raw=1' className="banner" alt="quiz"/>
            </div>
        );
    }

export default Home