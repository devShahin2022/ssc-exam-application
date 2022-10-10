import React from 'react';
import Header from '../../components/Header/Header';
import HelloLearner from '../../components/HelloLearner/HelloLearner';
import QuestionHeader from '../../components/QuestionHeader/QuestionHeader';
import Questions from '../../components/Questions/Questions';
import RecentFiveExam from '../../components/RecentFiveExam/RecentFiveExam';
import StickyHeader from '../../components/Sticky-header/StickyHeader';
import TotalPapersFound from '../../components/TotalPapersFound/TotalPapersFound';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TotalPapersFound></TotalPapersFound>
            <RecentFiveExam></RecentFiveExam>
            <HelloLearner></HelloLearner>
            <QuestionHeader></QuestionHeader>
            <StickyHeader></StickyHeader>
            <Questions></Questions>
        </div>
    );
};

export default Home;