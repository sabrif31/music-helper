import React, {useState} from 'react';
import { Slide } from 'react-slideshow-image';
import { capitalize } from "@material-ui/core";
// import 'react-slideshow-image/dist/styles.css'
import './style.scss';
import Typography from "@material-ui/core/Typography";

const list = {
    snareDrumCompression: [
        {
            txt: '',
            img: 'snare_compression_0'
        },
        {
            txt: 'Comme pour le tambour de coup de pied, la compression peut être subtilement ou radicalement modifier la forme transitoire d\'une caisse claire.',
            img: 'snare_compression_1'
        },
        {
            txt: 'Attachez une caisse claire en utilisant une attaque moyenne (5-20 ms) combinée à une libération rapide. Cela conserve le snap d\'ouverture de la caisse claire et épaissit son corps.',
            img: 'snare_compression_2'
        },
        {
            txt: 'Lisser une caisse claire en jumelant une attaque rapide (< 1 ms) avec une libération lente. Ici, les passagers d\'ouverture sont écrasés pour donner un son plus doux, plus profond, plus ′′ colleux',
            img: 'snare_compression_3'
        },
        {
            txt: 'Lorsque vous travaillez avec des combos collecteurs / claps superposés, envoyez tous les sons constitutifs dans un bus, puis compresse de colle en utilisant une attaque moyenne (5-20 ms) et une libération lente (100 ms).\n',
            img: 'snare_compression_4'
        }
    ],
    snareDrumFrequencies: [
        {
            txt: 'The Low End (50-350 Hz) : L \' arène critique ici est le ′′ corps ′′ tout important entre 120-350 Hz. Ceci contient le poids et le coup de poing intestin de la caisse claire. Ajoutez 1-2 dB en utilisant un EQ paramétrique pour identifier les fréquences de poinçonnage pour augmenter ce poids.',
            img: 'critical_snare_drum_frequencies_0'
        },
        {
            txt: 'Au-dessous de 90 Hz, le son est souvent composé de bruit et de grondement indésirables qui boue un mélange et interfère avec le coup de pied. Utilisez un filtre à étagère à faible coupe pour rouler en dessous de 70-100 Hz. Exactement où dépendra de la batterie. Coupez plus haut le spectre (220-250 Hz) pour des collections plus fines et plus crisper.',
            img: 'critical_snare_drum_frequencies_1'
        },
        {
            txt: 'La moyenne gamme (350 Hz-1 kHz) : La partie inférieure (350-500 Hz) de cette arène peut être boxeuse et bénéficie souvent d\'une légère coupe.\n',
            img: 'critical_snare_drum_frequencies_2',
        },
        {
            txt: 'Le milieu supérieur (1-4.5 kHz) : Ici réside la fissure - le son d\'attaque aiguë qui donne à une barre sa définition. Évitez les boosts importants ; coupez pour réduire la dureté.\n',
            img: 'critical_snare_drum_frequencies_3'
        },
        {
            txt: 'Le haut de gamme (4.5 kHz et plus) : la présence domine la partie inférieure de cette région, l\'air à environ 10 kHz. Concentrez-vous plus d\'énergie ici si vous avez besoin d\'une caisse claire pour couper à travers un mélange top-lourd - mais faites attention ; trop de milieu / haut de gamme sur une caisse claire peut faire mal.\n',
            img: 'critical_snare_drum_frequencies_4'
        }
    ]
}

const getCategory = () => {
    const finalList = {}
    Object.keys(list).forEach(file => {
        finalList[file] = list[file].map(item => ({
            txt: item.txt,
            img: `img/pauseplayrepeat/${item.img}.png`
        }))
    });
    return finalList;
}

const PausePlayRepeat = () => {
    const [state] = useState(getCategory());
    const properties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        indicators: true,
    };
    return (
        <div style={{ width: '100%' }}>
            {Object.keys(state).map((list) => (
                <div key={list}>
                    <hr />
                    <Typography style={{ textAlign: 'center' }} variant={'h3'}>{capitalize(list)}</Typography>
                    <hr />
                    <Slide {...properties}>
                        {state[list].map((each) => (
                            <img alt={each} src={each.img} width={300} />
                        ))}
                    </Slide>
                </div>
            ))}
        </div>
    );
}

export default PausePlayRepeat;
