import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import MultiSelect from '../../components/MultiSelect/MultiSelect';
import Dropdown from '../../components/Dropdown/Dropdown';
import FileUpload from '../../components/FileUpload/FileUpload';
import Button from '../../components/Button/Button';

const CreateQuizPage = () => {
    const [description, setDescription] = useState('');
    const [numOfQuizzes, setNumOfQuizzes] = useState('');
    const [questionTypes, setQuestionTypes] = useState([]);
    const [difficulty, setDifficulty] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        if (!description || !numOfQuizzes || !difficulty || !file) {
            alert('Please fill in all required fields!');
            return;
        }

        const quizData = {
            description,
            numOfQuizzes,
            questionTypes,
            difficulty,
            file,
        };

        console.log('Quiz Data:', quizData);
        alert('Quiz created successfully!');
    };

    return (
        <div style={styles.container}>
            <h1>Create Quiz</h1>
            <div style={styles.form}>
                <Input
                    label="Description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a description for the quiz"
                />
                <Input
                    label="Number of Quizzes"
                    type="number"
                    value={numOfQuizzes}
                    onChange={(e) => setNumOfQuizzes(e.target.value)}
                    placeholder="Enter the number of quizzes"
                />
                <MultiSelect
                    label="Question Type"
                    options={['Single Selection', 'True and False']}
                    selectedOptions={questionTypes}
                    onChange={(selected) => setQuestionTypes(selected)}
                />
                <Dropdown
                    label="Difficulty"
                    options={['Easy', 'Medium', 'Hard']}
                    selectedOption={difficulty}
                    onChange={(selected) => setDifficulty(selected)}
                />
                <FileUpload
                    label="Upload File"
                    onFileChange={(file) => setFile(file)}
                />
                <Button text="Create Quizzes" onClick={handleSubmit} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        gap: '15px',
    },
};

export default CreateQuizPage;
