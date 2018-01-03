import axios from 'axios';
import { googleConstants } from '../constants';
import { firebaseDb } from '../firebase';


export const sheetService = {
    getSheetValues,
    addSheet,
    getSheets,
    saveSheet,
    deleteSheet
};

function getSheetValues(sheetId, range) {
    return axios.get(googleConstants.HTTP_URL + sheetId + '/values/' + encodeURIComponent(range) + '?key=' + googleConstants.API_KEY)
                .then(result => {
                    console.log(result);
                    return result;
                })
                .catch(error => error.response);

}

function addSheet(name, sheetId, sheetName, questionCount, comments) {
    let ref = firebaseDb.ref('grammar-check-system/sheets/');
    return ref.push({
        name: name,
        questionCount: questionCount,
        sheetName: sheetName,
        spreadsheetId: sheetId,
        comments: comments,
        timestamp: Date.now()
    }, () => {
        console.log("done");
    });
}

function saveSheet(key, sheet) {
    let ref = firebaseDb.ref('grammar-check-system/sheets/' + key);
    return ref.set(sheet, (result) => {
        console.log('Sheet Saved!');
    });
}

function deleteSheet(key) {
    let ref = firebaseDb.ref('grammar-check-system/sheets/' + key);
    return ref.remove((result) => {
        console.log('Sheet Removed!');
    });
}



function getSheets() {
    let ref = firebaseDb.ref('grammar-check-system/sheets/');
    return ref.orderByChild('timestamp');
}