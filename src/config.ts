interface Trait {
    probability: string | number,
    value: string | number | string[]
}

interface Config {
    canvasSize: number,
    colorPalette: Trait[],
    colorPalettes: { [k: string]: string[] },
    fibColorPalettes: { [k: string]: string[] },
    pattern: Trait[],
    fractalPattern: Trait[],
    backgroundColor: string,
    pixelBorder: Trait[],
    pixelOffset: Trait[],
    pixelSize: Trait[],
    pixelShadow: Trait[],
    spiralSpeed: Trait[],
    spiralBoundry: Trait[],
    spiralPixelSize: Trait[],
    spiralPixelBorder: Trait[],
    spiralPixelShadow: Trait[],
    fractalPatterns: Trait[],
    tunnelDivisor: Trait[],
    tunnelPixelBorder: Trait[],
    tunnelPixelShadow: Trait[]
    borderColor: string
}

const PROBABILITIES = {
    LEGENDARY: .01,
    EPIC: .09,
    RARE: .2,
    UNCOMMON: .3,
    COMMON: '*'
};


const FIB_COLOR_PALETTES = {
    pythagoras: [
        '#005f73',
        '#e9d8a6',
        '#9b2226'
    ],
    euclid: [
        '#265999',
        '#f3b319',
        '#d94c19',
    ],
    lovelace: [
        '#ffffff',
        '#60a1bb',
        '#f48eac',
    ],
    turing: [
        '#03a062',
        '#01603A',
        '#002013 '
    ],
    escher: [
        '#9D0208',
        '#E85D04',
        '#FFBA08',
    ],
    fibonacci: [
        '#081214',
        '#2e6a78',
        '#4db1c8',

    ],
    nakamoto: [
        '#ffffff',
        '#f7931a',
        '#4d4d4d',
    ],
    mandelbrot: [
        '#8a50ff', //purple
        '#2793fe', //blue
        '#11c987', //green
    ]
}
const COLOR_PALETTES = {
    pythagoras: [
        '#001219',
        '#005f73',
        '#0a9396',
        '#94d2bd',
        '#e9d8a6',
        '#ee9b00',
        '#ca6702',
        '#ae2012',
        '#9b2226'
    ],
    euclid: [
        '#ffffff',
        '#265999',
        '#f3b319',
        '#d94c19',
        '#000000',
    ],
    lovelace: [
        '#ffffff',
        '#60a1bb',
        '#f48eac',
        '#000000',
    ],
    turing: [
        '#000000',
        '#ffffff',
        '#03a062',
        '#01603A',
        '#002013 '
    ],
    escher: [

        '#03071E',
        '#370617',
        '#6A040F',
        '#9D0208',
        '#DC2F02',
        '#D00000',
        '#E85D04',
        '#F48C06',
        '#FAA307',
        '#FFBA08',
    ],
    fibonacci: [
        '#ffffff',
        '#081214',
        '#2e6a78',
        '#4db1c8',
        '#000000'

    ],
    nakamoto: [
        '#ffffff',
        '#f7931a',
        '#4d4d4d',
        '#1a1a1a',
        '#010101',
    ],
    mandelbrot: [
        '#8a50ff',
        '#2793fe',
        '#11c987',
        '#ffff00',
        '#ff9900',
        '#ff5253',
        // '#000000',
        // '#777777',
        // '#ffffff',
    ],
    solana: [
        '#14eaab',
        '#7785d4',
        '#d229fb',
        '#45b9c0',
        '#55a9c7',
        '#6b92d0',
        '#a25ae6',
        '#000000'
    ],
};

const config: Config = {
    canvasSize: 512,
    backgroundColor: '#000',
    borderColor: '#000',
    colorPalettes: COLOR_PALETTES,
    fibColorPalettes: FIB_COLOR_PALETTES,
    colorPalette: [
        //Legendary
        {
            probability: PROBABILITIES.LEGENDARY,
            value: 'nakamoto'
        },

        //EPIC
        {
            probability: PROBABILITIES.EPIC,
            value: 'turing'
        },

        //Rare
        {
            probability: PROBABILITIES.RARE,
            value: 'mandelbrot'
        },
        {
            probability: PROBABILITIES.RARE,
            value: 'escher'
        },

        //Uncommon
        {
            probability: PROBABILITIES.UNCOMMON,
            value: 'fibonacci'
        },

        {
            probability: PROBABILITIES.UNCOMMON,
            value: 'lovelace'
        },
        {
            probability: PROBABILITIES.UNCOMMON,
            value: 'euclid'
        },

        //Common
        {
            probability: PROBABILITIES.COMMON,
            value: 'pythagoras'
        },

        // //OG Airdrop
        // {
        //     probability: PROBABILITIES.LEGENDARY,
        //     value: 'solana'
        // },
    ],

    pattern: [
        { probability: PROBABILITIES.COMMON, value: 'grid' },
        { probability: PROBABILITIES.UNCOMMON, value: 'tunnel' },
        { probability: PROBABILITIES.UNCOMMON, value: 'spiral' },
        { probability: PROBABILITIES.RARE, value: 'fractalGrid' },
        { probability: PROBABILITIES.RARE, value: 'fractalSpiral' },
        { probability: PROBABILITIES.EPIC, value: 'staircase' },
        { probability: PROBABILITIES.LEGENDARY, value: 'sierpinksi' },
        { probability: PROBABILITIES.LEGENDARY, value: 'mandlebrot' },
    ],
    fractalPattern: [
        { probability: PROBABILITIES.COMMON, value: 'grid' },
        { probability: PROBABILITIES.UNCOMMON, value: 'tunnel' },
        { probability: PROBABILITIES.COMMON, value: 'pixel' }
    ],

    pixelBorder: [
        { probability: PROBABILITIES.LEGENDARY, value: .25 },
        { probability: PROBABILITIES.EPIC, value: .125 },
        { probability: PROBABILITIES.RARE, value: .015625 },
        { probability: PROBABILITIES.UNCOMMON, value: .0078125 },
        { probability: PROBABILITIES.COMMON, value: 0 }
    ],

    pixelShadow: [
        { probability: PROBABILITIES.LEGENDARY, value: 32 },
        { probability: PROBABILITIES.EPIC, value: 16 },
        { probability: PROBABILITIES.RARE, value: 8 },
        { probability: PROBABILITIES.UNCOMMON, value: 4 },
        { probability: PROBABILITIES.COMMON, value: 0 }
    ],

    pixelOffset: [
        { probability: PROBABILITIES.LEGENDARY, value: 0 },
        { probability: PROBABILITIES.EPIC, value: 1 },
        { probability: PROBABILITIES.RARE, value: 2 },
        { probability: PROBABILITIES.UNCOMMON, value: 4 },
        { probability: PROBABILITIES.COMMON, value: 8 }
    ],

    pixelSize: [
        { probability: PROBABILITIES.LEGENDARY, value: .015625 },
        { probability: PROBABILITIES.EPIC, value: .03125 },
        { probability: PROBABILITIES.RARE, value: .0625 },
        { probability: PROBABILITIES.UNCOMMON, value: .125 },
        { probability: PROBABILITIES.COMMON, value: .25 }
    ],

    spiralSpeed: [
        { probability: PROBABILITIES.RARE, value: 1.61803398875 },
        { probability: PROBABILITIES.UNCOMMON, value: 1 },
        { probability: PROBABILITIES.COMMON, value: .88 },
    ],

    spiralBoundry: [
        { probability: PROBABILITIES.COMMON, value: 200 },
        // { probability: PROBABILITIES.COMMON, value: 200 },
    ],

    spiralPixelBorder: [
        { probability: PROBABILITIES.EPIC, value: .125 },
        { probability: PROBABILITIES.RARE, value: .015625 },
        { probability: PROBABILITIES.UNCOMMON, value: 0 },
        { probability: PROBABILITIES.COMMON, value: .0078125 }
    ],

    spiralPixelShadow: [
        { probability: PROBABILITIES.EPIC, value: 64 },
        { probability: PROBABILITIES.RARE, value: 32 },
        { probability: PROBABILITIES.UNCOMMON, value: 16 },
        { probability: PROBABILITIES.COMMON, value: 8 }
    ],

    spiralPixelSize: [
        { probability: PROBABILITIES.LEGENDARY, value: .015625 },
        { probability: PROBABILITIES.EPIC, value: .03125 },
        { probability: PROBABILITIES.COMMON, value: .0625 },
    ],

    fractalPatterns: [
        { probability: PROBABILITIES.RARE, value: '*' },
        { probability: PROBABILITIES.COMMON, value: 'tunnel' }
    ],

    tunnelDivisor: [
        { probability: PROBABILITIES.UNCOMMON, value: 1.5 },
        { probability: PROBABILITIES.COMMON, value: '*' }
    ],

    tunnelPixelShadow: [
        { probability: PROBABILITIES.RARE, value: 16 },
        { probability: PROBABILITIES.UNCOMMON, value: 32 },
        { probability: PROBABILITIES.COMMON, value: 0 }
    ],

    tunnelPixelBorder: [
        { probability: PROBABILITIES.RARE, value: .0078125 },
        { probability: PROBABILITIES.UNCOMMON, value: 0.00390625 },
        { probability: PROBABILITIES.COMMON, value: 0 }
    ]
}

export default config;