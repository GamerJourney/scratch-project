import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import * as MemoryActions from '../Actions/actions'

export default () => {
    const cardSet = [];
    let qNa = [];

    // const list = fetch('http://localhost:3000/vocab/10')
    // .then(response => {
    //   return response.json();
    // }).then(list => {
    //   return list;
    // })

    const getData = async () => {
        try {
            const listData = await fetch('http://localhost:3000/vocab/10');
            const list = await JSON.parse(listData);
            console.log(list);
            return list;
        } catch (err) {
            console.log(err);
        }
    }

    for (const prop in list.vocabObj) {
        let qa = {
            q: `vocabObj.${prop}`,
            a: `${vocabObj[prop]}`
        }
        qNa.push(qa);
    }

    for (let i = 0; i < qNa.length; i++) {
        cardSet.push({
            id: i,
            cardStatus: 'HIDING',
            cardContent: qNa[i].q,
            qnaSetId: 'qnaSet' + i,
            noClick: false,
        })
        cardSet.push({
            id: qNa.length + i,
            cardStatus: 'HIDING',
            cardContent: qNa[i].a,
            qnaSetId: 'qnaSet' + i,
            noClick: false,
        })
    };

    return shuffle(cardSet);
}


function shuffleArray(array) {
    return array.sort(() => Math.round(Math.random()) - 0.5);
}

const list = fetch('http://localhost:3000/vocab/10')
    .then(response => {
        return response.json();
    }).then(list => {
        return list;
    })

