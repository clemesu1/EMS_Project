import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import abcsReducer from './features/abcs';
import assessFindingsReducer from './features/assessFindings';
import bodySystemsReducer from './features/bodySystems';
import callTransactionReducer from './features/callTransaction';
import cardiacArrestReducer from './features/cardiacArrest';
import chestPainReducer from './features/chestPain';
import incidentDetailsReducer from './features/incidentDetails';
import mechanismInjuryReducer from './features/mechanismInjury';
import neonatalAssessmentReducer from './features/neonatalAssessment';
import neuroResponseReducer from './features/neuroResponse';
import obstetricReducer from './features/obstetric';
import patientDetailsReducer from './features/patientDetails';
import patientHistoryReducer from './features/patientHistory';
import respiratoryReducer from './features/respiratory';
import seizureReducer from './features/seizure';
import toxicExposureReducer from './features/toxicExposure';
import traumaAssessmentReducer from './features/traumaAssessment';
import vehicleDetailsReducer from './features/vehicleDetails';
import interventionsReducer from './features/interventions';
import medicationsReducer from './features/medications';
import vitalSignReducer from './features/vitalSign';

const store = configureStore({
  reducer: {
    abcs: abcsReducer,
    assessFindings: assessFindingsReducer,
    bodySystems: bodySystemsReducer,
    callTransaction: callTransactionReducer,
    cardiacArrest: cardiacArrestReducer,
    incidentDetails: incidentDetailsReducer,
    chestPain: chestPainReducer,
    mechanismInjury: mechanismInjuryReducer,
    neonatalAssessment: neonatalAssessmentReducer,
    neuroResponse: neuroResponseReducer,
    obstetric: obstetricReducer,
    patientDetails: patientDetailsReducer,
    patientHistory: patientHistoryReducer,
    respiratory: respiratoryReducer,
    seizure: seizureReducer,
    toxicExposure: toxicExposureReducer,
    traumaAssessment: traumaAssessmentReducer,
    vehicleDetails: vehicleDetailsReducer,
    interventions: interventionsReducer,
    medications: medicationsReducer,
    vitalSign: vitalSignReducer,
  },
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
