const optionCategory=[
    {label:'Business', value:'business'},
    {label:'Entertainment',value:'entertainment'},
    {label:'General', value:'general'},
    {label:'Health', value:'health'},
    {label:'Science', value:'science'},
    {label:'Sports', value:'sports'},
    {label:'Technology', value:'technology'}
];

const optionCountry=[
    {label: 'Argentina', value:'ar'},
    {label:'USA', value:'us'},
    {label:'Mexico', value:'mx'}
]


const optionHead=[
    {label:'Top Headlines', value:'top-headlines'},
    {label:'Everything', value:'everything'}
]

const initDates={
    from:new Date(Date.now()-24*60*60*1000).toISOString().split('T')[0],
    to:new Date(Date.now()).toISOString().split('T')[0]
};

const lang=[
    {label:'English',value:'en'},
    {label:'Español',value:'es'}
]

const initData={
        news:'top-headlines',
        country:'us',
        category:'general',
        language:'en',
        dates:initDates
}


export {optionCategory,optionCountry,optionHead,initDates,lang,initData};