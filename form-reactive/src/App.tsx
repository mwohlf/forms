import { CharStreams, CommonTokenStream } from "antlr4ts";
import React, { useEffect, useState } from 'react';
import './App.css';
import FormScreen from "./FormScreen";
import { ProcessDataFormLexer } from "./generated/ProcessDataFormLexer";
import { ProcessDataFormContext, ProcessDataFormParser } from "./generated/ProcessDataFormParser";
import { FormRenderer } from "./util/FormRenderer";


function App() {

    return (
        <FormScreen></FormScreen>
    );
}

export default App;
