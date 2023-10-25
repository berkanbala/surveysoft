import React from "react";
import { Home } from "app/pages/home/home";
import { Surveys } from "common/components/surveys/surveys";
import { SurveysAdd } from "common/components/surveysAdd/surveysAdd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/surveysAdd" element={<SurveysAdd />} />
      </Routes>
    </Router>
  );
};
