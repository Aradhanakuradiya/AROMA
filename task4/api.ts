import axios from 'axios';

const API_BASE_URL = 'https://api.languagelearning.com';

export const fetchVocabulary = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vocabulary`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching vocabulary: ' + error.message);
    }
};

export const fetchQuizzes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/quizzes`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching quizzes: ' + error.message);
    }
};

export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data: ' + error.message);
    }
};