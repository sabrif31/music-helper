import React from 'react';
import { go, inverter, inact } from './scripts.js';
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ContainedButtons from "../form/components/Button";
import Button from "@material-ui/core/Button";


import vpcfiller from '../../../assets/vpcfiller.gif';
import vpcblank from '../../../assets/vpcblank.gif';
import vpcblack from '../../../assets/vpcblack.gif';
import './style.scss';

const noteFundamental = [
    { label: 'C', value: 1},
    { label: 'C# / Db', value: 2},
    { label: 'D', value: 3},
    { label: 'D# / Eb', value: 4},
    { label: 'E', value: 5},
    { label: 'F / E#', value: 6},
    { label: 'F# / Gb', value: 7},
    { label: 'G', value: 8},
    { label: 'G# / Ab', value: 9},
    { label: 'A', value: 10},
    { label: 'A# / Bb', value: 11},
    { label: 'B / Cb', value: 12},
]

const accord = [
    {
    "value": "5,8,",
    "label": "Major"
    },
    {
        "value": "4,8,",
        "label": "Minor"
    },
    {
        "value": "8,",
        "label": "5"
    },
    {
        "value": "5,8,11,",
        "label": "Dominant 7th"
    },
    {
        "value": "5,8,12,",
        "label": "Major 7th"
    },
    {
        "value": "4,8,11,",
        "label": "Minor 7th"
    },
    {
        "value": "4,8,12,",
        "label": "Minor Major 7th"
    },
    {
        "value": "6,8,",
        "label": "Sus 4"
    },
    {
        "value": "3,8,",
        "label": "Sus 2"
    },
    {
        "value": "5,8,10,",
        "label": "6"
    },
    {
        "value": "4,8,10,",
        "label": "Minor 6"
    },
    {
        "value": "5,8,11,3,",
        "label": "9"
    },
    {
        "value": "4,8,11,3,",
        "label": "Minor 9"
    },
    {
        "value": "5,8,12,3,",
        "label": "Major 9"
    },
    {
        "value": "4,8,12,3,",
        "label": "Minor Major 9"
    },
    {
        "value": "5,8,11,3,6,",
        "label": "11"
    },
    {
        "value": "4,8,11,3,6,",
        "label": "Minor 11"
    },
    {
        "value": "5,8,12,3,6,",
        "label": "Major 11"
    },
    {
        "value": "4,8,12,3,6,",
        "label": "Minor Major 11"
    },
    {
        "value": "5,8,11,3,10,",
        "label": "13"
    },
    {
        "value": "4,8,11,3,10,",
        "label": "Minor 13"
    },
    {
        "value": "5,8,12,3,10,",
        "label": "Major 13"
    },
    {
        "value": "4,8,12,3,10,",
        "label": "Minor Major 13"
    },
    {
        "value": "5,8,3,",
        "label": "add 9"
    },
    {
        "value": "4,8,3,",
        "label": "Minor add 9"
    },
    {
        "value": "5,8,10,3,",
        "label": "6 add 9"
    },
    {
        "value": "4,8,10,3,",
        "label": "Minor 6 add 9"
    },
    {
        "value": "5,8,11,6,",
        "label": "Dominant 7th add 11"
    },
    {
        "value": "5,8,12,6,",
        "label": "Major 7th add 11"
    },
    {
        "value": "4,8,11,6,",
        "label": "Minor 7th add 11"
    },
    {
        "value": "4,8,12,6,",
        "label": "Minor Major 7th add 11"
    },
    {
        "value": "5,8,11,10,",
        "label": "Dominant 7th add 13"
    },
    {
        "value": "5,8,12,10,",
        "label": "Major 7th add 13"
    },
    {
        "value": "4,8,11,10,",
        "label": "Minor 7th add 13"
    },
    {
        "value": "4,8,12,10,",
        "label": "Minor Major 7th add 13"
    },
    {
        "value": "5,7,11,",
        "label": "7b5"
    },
    {
        "value": "5,9,11,",
        "label": "7#5"
    },
    {
        "value": "5,8,11,2,",
        "label": "7b9"
    },
    {
        "value": "5,8,11,4,",
        "label": "7#9"
    },
    {
        "value": "5,9,11,2,",
        "label": "7#5b9"
    },
    {
        "value": "4,7,11,",
        "label": "m7b5"
    },
    {
        "value": "4,9,11,",
        "label": "m7#5"
    },
    {
        "value": "4,8,11,2,",
        "label": "m7b9"
    },
    {
        "value": "5,8,11,3,7,",
        "label": "9#11"
    },
    {
        "value": "5,8,11,3,9,",
        "label": "9b13"
    },
    {
        "value": "6,8,10,",
        "label": "6sus4"
    },
    {
        "value": "6,8,11,",
        "label": "7sus4"
    },
    {
        "value": "6,8,12,",
        "label": "Major 7th Sus4"
    },
    {
        "value": "6,8,11,3,",
        "label": "9sus4"
    },
    {
        "value": "6,8,12,3,",
        "label": "Major 9 Sus4"
    },
]

const gamme = [
    {
        "value": "2212221",
        "label": "Major"
    },
    {
        "value": "2122131",
        "label": "Harmonic Minor"
    },
    {
        "value": "2122221",
        "label": "Melodic Minor"
    },
    {
        "value": "22323",
        "label": "Pentatonic Major"
    },
    {
        "value": "32232",
        "label": "Pentatonic Minor"
    },
    {
        "value": "32113",
        "label": "Pentatonic Blues"
    },
    {
        "value": "2323",
        "label": "Pentatonic Neutral"
    },
    {
        "value": "2212221",
        "label": "Ionian"
    },
    {
        "value": "32122122",
        "label": "Aeolian"
    },
    {
        "value": "2122212",
        "label": "Dorian"
    },
    {
        "value": "2212212",
        "label": "Mixolydian"
    },
    {
        "value": "1222122",
        "label": "Phrygian"
    },
    {
        "value": "2221221",
        "label": "Lydian"
    },
    {
        "value": "1221222",
        "label": "Locrian"
    },
    {
        "value": "1212121",
        "label": "Dim half"
    },
    {
        "value": "2121212",
        "label": "Dim whole"
    },
    {
        "value": "22222",
        "label": "Whole"
    },
    {
        "value": "31313",
        "label": "Augmented"
    },
    {
        "value": "111111111111",
        "label": "Chromatic"
    },
    {
        "value": "2131212",
        "label": "Roumanian Minor"
    },
    {
        "value": "1312122",
        "label": "Spanish Gypsy"
    },
    {
        "value": "321132",
        "label": "Blues"
    },
    {
        "value": "22323",
        "label": "Diatonic"
    },
    {
        "value": "1312131",
        "label": "Double Harmonic"
    },
    {
        "value": "12111222",
        "label": "Eight Tone Spanish"
    },
    {
        "value": "1322211",
        "label": "Enigmatic"
    },
    {
        "value": "222211",
        "label": "Leading Whole Tone"
    },
    {
        "value": "2222121",
        "label": "Lydian Augmented"
    },
    {
        "value": "1222221",
        "label": "Neoploitan Major"
    },
    {
        "value": "1222122",
        "label": "Neopolitan Minor"
    },
    {
        "value": "12341",
        "label": "Pelog"
    },
    {
        "value": "222312",
        "label": "Prometheus"
    },
    {
        "value": "132312",
        "label": "Prometheus Neopolitan"
    },
    {
        "value": "131313",
        "label": "Six Tone Symmetrical"
    },
    {
        "value": "1212222",
        "label": "Super Locrian"
    },
    {
        "value": "2221122",
        "label": "Lydian Minor"
    },
    {
        "value": "2131122",
        "label": "Lydian Diminished"
    },
    {
        "value": "211211121",
        "label": "Nine Tone Scale"
    },
    {
        "value": "21212121",
        "label": "Auxiliary Diminished"
    },
    {
        "value": "222222",
        "label": "Auxiliary Augmented"
    },
    {
        "value": "12121212",
        "label": "Auxiliary Diminished Blues"
    },
    {
        "value": "2211222",
        "label": "Major Locrian"
    },
    {
        "value": "2221212",
        "label": "Overtone"
    },
    {
        "value": "1212222",
        "label": "Diminished Whole Tone"
    },
    {
        "value": "2122122",
        "label": "Pure Minor"
    },
    {
        "value": "232212",
        "label": "Dominant 7th"
    }
]

const Piano = () => {
    return (
        <div className="clavier-virtuel">
            <form name="keyform" action="" id="keyform">
                <table border="2" cellPadding="1" cellSpacing="0" bgcolor="#FFFFFF" align="center">
                    <tbody>
                        <tr>
                            <td colSpan="4" bgcolor="#FFFFFF">
                                <div id="div2" data-children-count="5">
                                    <input type="radio" name="notesnum" value="0" defaultChecked />
                                    <input type="radio" name="notesnum" value="1"/>
                                    <input type="radio" name="notesnum" value="2" />
                                    <input
                                        type="text"
                                        name="forminput"
                                        onFocus={() => {
                                            document.keyform.formdisp.value = '';
                                            inact();
                                            document.keyform.cordscal[2].checked = 1;
                                        }}
                                        size="20"
                                    />
                                    <input type="button" value="Montrer" name="goinput" onClick={go} />
                                </div>
                                <table border="0" cellPadding="1" bgcolor="#EFEFEF">
                                    <tbody>
                                        <tr>
                                            <td colSpan="4" bgcolor="#000000">
                                                <center>
                                                    <table border="0" cellPadding="0" cellSpacing="0" width="471" className={'piano'}>
                                                        <tbody>
                                                            <tr><td colSpan="103" height="1"><img src={vpcfiller} width="471" height="1" alt=""/></td></tr>
                                                            <tr>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td width="15"><img name="t1" src={vpcblank} width="15" height="60" alt="" id="t1"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td><img name="s1b1" src={vpcblack} width="5" height="60" alt="" id="s1b1"/></td>
                                                                <td><img name="s1b2" src={vpcblack} width="1" height="60" alt="" id="s1b2"/></td>
                                                                <td><img name="s1b3" src={vpcblack} width="5" height="60" alt="" id="s1b3"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td width="12"><img src={vpcblank} name="t2" width="12" height="60" alt="" id="t2"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td><img name="s2b1" src={vpcblack} width="5" height="60" alt="" id="s2b1"/></td>
                                                                <td><img name="s2b2" src={vpcblack} width="1" height="60" alt="" id="s2b2"/></td>
                                                                <td><img name="s2b3" src={vpcblack} width="5" height="60" alt="" id="s2b3"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t3" src={vpcblank} width="12" height="60" alt="" id="t3"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td width="14"><img src={vpcblank} name="t4" width="14" height="60" alt="" id="t4"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td><img name="s3b1" src={vpcblack} width="5" height="60" alt="" id="s3b1"/></td>
                                                                <td><img name="s3b2" src={vpcblack} width="1" height="60" alt="" id="s3b2"/></td>
                                                                <td><img name="s3b3" src={vpcblack} width="5" height="60" alt="" id="s3b3"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t5" src={vpcblank} width="12" height="60" alt="" id="t5"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td><img name="s4b1" src={vpcblack} width="5" height="60" alt="" id="s4b1"/></td>
                                                                <td><img name="s4b2" src={vpcblack} width="1" height="60" alt="" id="s4b2"/></td>
                                                                <td><img name="s4b3" src={vpcblack} width="5" height="60" alt="" id="s4b3"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t6" src={vpcblank} width="12" height="60" alt="" id="t6"/></td>
                                                                <td><img src={vpcfiller} width="1" height="60" alt=""/></td>
                                                                <td><img name="s5b1" src={vpcblack} width="5" height="60" alt="" id="s5b1"/></td>
                                                                <td><img name="s5b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s5b2"/></td>
                                                                <td><img name="s5b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s5b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="13"><img name="t7"
                                                                    src={vpcblank}
                                                                    width="13" height="60" alt="" id="t7"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="15"><img name="t8"
                                                                    src={vpcblank}
                                                                    width="15" height="60" alt="" id="t8"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s6b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s6b1"/></td>
                                                                <td><img name="s6b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s6b2"/></td>
                                                                <td><img name="s6b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s6b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img
                                                                    src={vpcblank}
                                                                    name="t9" width="12" height="60" alt="" id="t9"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s7b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s7b1"/></td>
                                                                <td><img name="s7b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s7b2"/></td>
                                                                <td><img name="s7b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s7b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t10"
                                                                    src={vpcblank}
                                                                    width="12" height="60" alt="" id="t10"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="14"><img
                                                                    src={vpcblank}
                                                                    name="t11" width="14" height="60" alt="" id="t11"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s8b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s8b1"/></td>
                                                                <td><img name="s8b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s8b2"/></td>
                                                                <td><img name="s8b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s8b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img
                                                                    src={vpcblank}
                                                                    name="t12" width="12" height="60" alt="" id="t12"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s9b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s9b1"/></td>
                                                                <td><img name="s9b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s9b2"/></td>
                                                                <td><img name="s9b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s9b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t13"
                                                                    src={vpcblank}
                                                                    width="12" height="60" alt="" id="t13"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s10b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s10b1"/></td>
                                                                <td><img name="s10b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s10b2"/></td>
                                                                <td><img name="s10b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s10b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t14"
                                                                    src={vpcblank}
                                                                    width="12" height="60" alt="" id="t14"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="15"><img
                                                                    src={vpcblank}
                                                                    name="t15" width="15" height="60" alt="" id="t15"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s11b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s11b1"/></td>
                                                                <td><img name="s11b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s11b2"/></td>
                                                                <td><img name="s11b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s11b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img
                                                                    src={vpcblank}
                                                                    name="t16" width="12" height="60" alt="" id="t16"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s12b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s12b1"/></td>
                                                                <td><img name="s12b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s12b2"/></td>
                                                                <td><img name="s12b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s12b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t17"
                                                                    src={vpcblank}
                                                                    width="12" height="60" alt="" id="t17"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="14"><img name="t18"
                                                                    src={vpcblank}
                                                                    width="14" height="60" alt="" id="t18"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s13b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s13b1"/></td>
                                                                <td><img name="s13b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s13b2"/></td>
                                                                <td><img name="s13b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s13b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t19"
                                                                    src={vpcblank}
                                                                    width="12" height="60" alt="" id="t19"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s14b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s14b1"/></td>
                                                                <td><img name="s14b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s14b2"/></td>
                                                                <td><img name="s14b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s14b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="12"><img name="t20"
                                                                    src={vpcblank}
                                                                    width="12" height="60" alt="" id="t20"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td><img name="s15b1"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s15b1"/></td>
                                                                <td><img name="s15b2"
                                                                    src={vpcblack}
                                                                    width="1" height="60" alt="" id="s15b2"/></td>
                                                                <td><img name="s15b3"
                                                                    src={vpcblack}
                                                                    width="5" height="60" alt="" id="s15b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                                <td width="13"><img name="t21"
                                                                    src={vpcblank}
                                                                    width="13" height="60" alt="" id="t21"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="60" alt=""/></td>
                                                            </tr>
                                                            <tr>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                                <td height="1" width="15"><img
                                                                    src={vpcblank}
                                                                    name="m1" width="15" height="1" alt="" id="m1"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m2" width="12" height="1" alt="" id="m2"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m3" width="12" height="1" alt="" id="m3"/></td>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                                <td height="1" width="14"><img
                                                                    src={vpcblank}
                                                                    name="m4" width="14" height="1" alt="" id="m4"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m5" width="12" height="1" alt="" id="m5"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m6" width="12" height="1" alt="" id="m6"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="13"><img
                                                                    src={vpcblank}
                                                                    name="m7" width="13" height="1" alt="" id="m7"/></td>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                                <td height="1" width="15"><img
                                                                    src={vpcblank}
                                                                    name="m8" width="15" height="1" alt="" id="m8"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m9" width="12" height="1" alt="" id="m9"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m10" width="12" height="1" alt="" id="m10"/></td>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                                <td height="1" width="14"><img
                                                                    src={vpcblank}
                                                                    name="m11" width="14" height="1" alt="" id="m11"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m12" width="12" height="1" alt="" id="m12"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m13" width="12" height="1" alt="" id="m13"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m14" width="12" height="1" alt="" id="m14"/></td>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                                <td height="1" width="15"><img
                                                                    src={vpcblank}
                                                                    name="m15" width="15" height="1" alt="" id="m15"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m16" width="12" height="1" alt="" id="m16"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m17" width="12" height="1" alt="" id="m17"/></td>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                                <td height="1" width="14"><img
                                                                    src={vpcblank}
                                                                    name="m18" width="14" height="1" alt="" id="m18"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m19" width="12" height="1" alt="" id="m19"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="12"><img
                                                                    src={vpcblank}
                                                                    name="m20" width="12" height="1" alt="" id="m20"/></td>
                                                                <td height="1" width="13" colSpan="5"><img
                                                                    src={vpcfiller}
                                                                    width="13" height="1" alt=""/></td>
                                                                <td height="1" width="13"><img
                                                                    src={vpcblank}
                                                                    name="m21" width="13" height="1" alt="" id="m21"/></td>
                                                                <td height="1" width="1"><img
                                                                    src={vpcfiller}
                                                                    width="1" height="1" alt=""/></td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="21" colSpan="3"><img name="b1"
                                                                    src={vpcblank}
                                                                    width="21" height="30" alt=""
                                                                    id="b1"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b2"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b2"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="18" colSpan="3"><img name="b3"
                                                                    src={vpcblank}
                                                                    width="18" height="30" alt=""
                                                                    id="b3"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="20" colSpan="3"><img name="b4"
                                                                    src={vpcblank}
                                                                    width="20" height="30" alt=""
                                                                    id="b4"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b5"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b5"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b6"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b6"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="19" colSpan="3"><img name="b7"
                                                                    src={vpcblank}
                                                                    width="19" height="30" alt=""
                                                                    id="b7"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="21" colSpan="3"><img name="b8"
                                                                    src={vpcblank}
                                                                    width="21" height="30" alt=""
                                                                    id="b8"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b9"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b9"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="18" colSpan="3"><img name="b10"
                                                                    src={vpcblank}
                                                                    width="18" height="30" alt=""
                                                                    id="b10"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="20" colSpan="3"><img name="b11"
                                                                    src={vpcblank}
                                                                    width="20" height="30" alt=""
                                                                    id="b11"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b12"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b12"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b13"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b13"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="18" colSpan="3"><img name="b14"
                                                                    src={vpcblank}
                                                                    width="18" height="30" alt=""
                                                                    id="b14"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="21" colSpan="3"><img name="b15"
                                                                    src={vpcblank}
                                                                    width="21" height="30" alt=""
                                                                    id="b15"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b16"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b16"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="18" colSpan="3"><img name="b17"
                                                                    src={vpcblank}
                                                                    width="18" height="30" alt=""
                                                                    id="b17"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="20" colSpan="3"><img name="b18"
                                                                    src={vpcblank}
                                                                    width="20" height="30" alt=""
                                                                    id="b18"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b19"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b19"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="24" colSpan="5"><img name="b20"
                                                                    src={vpcblank}
                                                                    width="24" height="30" alt=""
                                                                    id="b20"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                                <td width="19" colSpan="3"><img name="b21"
                                                                    src={vpcblank}
                                                                    width="19" height="30" alt=""
                                                                    id="b21"/></td>
                                                                <td><img src={vpcfiller}
                                                                    width="1" height="30" alt=""/></td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="103" height="1"><img
                                                                    src={vpcfiller}
                                                                    width="471" height="1" alt=""/></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                </center>
                                            </td>
                                        </tr>

                                        <tr className={'selector'}>
                                            <td><p align="center"><b>&nbsp; &nbsp;SÉLECTIONNER :</b></p></td>
                                            <td data-children-count="1">
                                                <input type="radio" name="cordscal" value="0" defaultChecked onClick={() => document.keyform.formula.focus()} />
                                                <b>Accord</b>
                                            </td>
                                            <td>
                                                <b data-children-count="1">
                                                    <input type="radio" name="cordscal" onClick={() => document.keyform.scale.focus()} value="1" />Gamme
                                                </b>
                                            </td>
                                            <td>
                                                <div id="div1" data-children-count="1">
                                                    <input type="radio" name="cordscal" value="2" onClick={() => document.keyform.forminput.focus()} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-children-count="1">
                                                <Select
                                                    variant={'outlined'}
                                                    name="root"
                                                    size={8}
                                                    native
                                                    defaultValue={1}
                                                    onChange={go}
                                                    inputProps={{ id: 'select-multiple-native-root' }}
                                                >
                                                {noteFundamental.map(note => <option key={note.value + note.label} value={note.value}>{note.label}</option>)}
                                                </Select>
                                            </td>
                                            <td data-children-count="1" class='gamme'>
                                                <Select
                                                    variant={'outlined'}
                                                    name="formula"
                                                    size={8}
                                                    native
                                                    defaultValue="5,8,"
                                                    onChange={go}
                                                    onFocus={() => {
                                                        document.keyform.cordscal[0].checked = 1;
                                                        go();
                                                    }}
                                                    inputProps={{ id: 'select-multiple-native-formula' }}
                                                >
                                                    {accord.map(note => <option key={note.value + note.label} value={note.value}>{note.label}</option>)}
                                                </Select>
                                            </td>
                                            <td data-children-count="1">
                                                <Select
                                                    variant={'outlined'}
                                                    name="scale"
                                                    size={8}
                                                    native
                                                    defaultValue={2212221}
                                                    onChange={go}
                                                    onFocus={() => {
                                                        document.keyform.cordscal[1].checked = 1;
                                                        go();
                                                    }}
                                                    inputProps={{ id: 'select-multiple-native-scale' }}
                                                >
                                                    {gamme.map(note => <option key={note.value + note.label} value={note.value}>{note.label}</option>)}
                                                </Select>
                                            </td>
                                            <td>
                                                <Button variant="contained" color="primary" name="hjh" onClick={() => inverter()}>Inverser l'accord</Button>
                                            </td>
                                            <td colSpan="2"><p className="center b" data-children-count="1">Laisser la gamme couvrir le clavier:<input type="checkbox" value="off" name="lingerscal" onClick={() => go()} /></p></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table width="100%" border="0" cellPadding="0" cellSpacing="5" bgcolor="#339999"
                                    align="center">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="center b texte-blanc" data-children-count="1">
                                                    Notes composant l'accord ou la gamme&nbsp;: <input type="text" name="formdisp" size="20" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Piano;
