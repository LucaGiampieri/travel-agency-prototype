const travel = [
    {
        id: 1,
        destinazione: "Parigi",
        dataInizio: "2026-04-05",
        dataFine: "2026-04-12",
        partecipanti: [
            { nome: "Luca", cognome: "Rossi", telefono: "+39 3331234561", email: "luca.rossi1@mail.it" },
            { nome: "Sara", cognome: "Bianchi", telefono: "+39 3341234562", email: "sara.bianchi2@mail.it" },
            { nome: "Marco", cognome: "Verdi", telefono: "+39 3351234563", email: "marco.verdi3@mail.it" },
            { nome: "Elisa", cognome: "Greco", telefono: "+39 3361234564", email: "elisa.greco4@mail.it" },
            { nome: "Andrea", cognome: "Romano", telefono: "+39 3371234565", email: "andrea.romano5@mail.it" },
            { nome: "Chiara", cognome: "Costa", telefono: "+39 3381234566", email: "chiara.costa6@mail.it" },
            { nome: "Paolo", cognome: "Conti", telefono: "+39 3391234567", email: "paolo.conti7@mail.it" },
            { nome: "Irene", cognome: "Rizzo", telefono: "+39 3401234568", email: "irene.rizzo8@mail.it" }
        ]
    },
    {
        id: 2,
        destinazione: "Tokyo",
        dataInizio: "2026-05-02",
        dataFine: "2026-05-14",
        partecipanti: [
            { nome: "Giulia", cognome: "Ferrari", telefono: "+39 3332234561", email: "giulia.ferrari1@mail.it" },
            { nome: "Davide", cognome: "Moretti", telefono: "+39 3342234562", email: "davide.moretti2@mail.it" },
            { nome: "Elena", cognome: "Fontana", telefono: "+39 3352234563", email: "elena.fontana3@mail.it" },
            { nome: "Matteo", cognome: "Longo", telefono: "+39 3362234564", email: "matteo.longo4@mail.it" },
            { nome: "Simone", cognome: "Marino", telefono: "+39 3372234565", email: "simone.marino5@mail.it" },
            { nome: "Valentina", cognome: "Bruno", telefono: "+39 3382234566", email: "valentina.bruno6@mail.it" },
            { nome: "Stefano", cognome: "Gallo", telefono: "+39 3392234567", email: "stefano.gallo7@mail.it" },
            { nome: "Federica", cognome: "Ricci", telefono: "+39 3402234568", email: "federica.ricci8@mail.it" }
        ]
    },
    {
        id: 3,
        destinazione: "New York",
        dataInizio: "2026-06-10",
        dataFine: "2026-06-18",
        partecipanti: [
            { nome: "Alessio", cognome: "Costa", telefono: "+39 3333234561", email: "alessio.costa@mail.it" },
            { nome: "Martina", cognome: "Esposito", telefono: "+39 3343234562", email: "martina.esposito@mail.it" },
            { nome: "Giorgio", cognome: "Barbieri", telefono: "+39 3353234563", email: "giorgio.barbieri@mail.it" },
            { nome: "Francesca", cognome: "De Luca", telefono: "+39 3363234564", email: "francesca.deluca@mail.it" },
            { nome: "Marco", cognome: "Greco", telefono: "+39 3373234565", email: "marco.greco@mail.it" },
            { nome: "Sara", cognome: "Mancini", telefono: "+39 3383234566", email: "sara.mancini@mail.it" },
            { nome: "Davide", cognome: "Romano", telefono: "+39 3393234567", email: "davide.romano@mail.it" },
            { nome: "Chiara", cognome: "Rossi", telefono: "+39 3403234568", email: "chiara.rossi@mail.it" }
        ]
    },
    {
        id: 4,
        destinazione: "Londra",
        dataInizio: "2026-07-03",
        dataFine: "2026-07-09",
        partecipanti: [
            { nome: "Paolo", cognome: "Ferrari", telefono: "+39 3334234561", email: "paolo.ferrari@mail.it" },
            { nome: "Elisa", cognome: "Fontana", telefono: "+39 3344234562", email: "elisa.fontana@mail.it" },
            { nome: "Simone", cognome: "Ricci", telefono: "+39 3354234563", email: "simone.ricci@mail.it" },
            { nome: "Irene", cognome: "Costa", telefono: "+39 3364234564", email: "irene.costa@mail.it" },
            { nome: "Andrea", cognome: "Conti", telefono: "+39 3374234565", email: "andrea.conti@mail.it" },
            { nome: "Giulia", cognome: "Bianchi", telefono: "+39 3384234566", email: "giulia.bianchi@mail.it" },
            { nome: "Stefano", cognome: "Longo", telefono: "+39 3394234567", email: "stefano.longo@mail.it" },
            { nome: "Martina", cognome: "Verdi", telefono: "+39 3404234568", email: "martina.verdi@mail.it" }
        ]
    },
    {
        id: 5,
        destinazione: "Barcellona",
        dataInizio: "2026-08-01",
        dataFine: "2026-08-07",
        partecipanti: [
            { nome: "Luca", cognome: "Marino", telefono: "+39 3335234561", email: "luca.marino@mail.it" },
            { nome: "Elena", cognome: "Greco", telefono: "+39 3345234562", email: "elena.greco@mail.it" },
            { nome: "Davide", cognome: "Rizzo", telefono: "+39 3355234563", email: "davide.rizzo@mail.it" },
            { nome: "Federica", cognome: "Conti", telefono: "+39 3365234564", email: "federica.conti@mail.it" },
            { nome: "Marco", cognome: "Moretti", telefono: "+39 3375234565", email: "marco.moretti@mail.it" },
            { nome: "Sara", cognome: "Costa", telefono: "+39 3385234566", email: "sara.costa@mail.it" },
            { nome: "Giorgio", cognome: "Romano", telefono: "+39 3395234567", email: "giorgio.romano@mail.it" },
            { nome: "Chiara", cognome: "Ferrari", telefono: "+39 3405234568", email: "chiara.ferrari@mail.it" }
        ]
    },
    {
        id: 6,
        destinazione: "Dubai",
        dataInizio: "2026-09-05",
        dataFine: "2026-09-13",
        partecipanti: [
            { nome: "Andrea", cognome: "Rossi", telefono: "+39 3336234561", email: "andrea.rossi@mail.it" },
            { nome: "Martina", cognome: "Greco", telefono: "+39 3346234562", email: "martina.greco@mail.it" },
            { nome: "Simone", cognome: "Conti", telefono: "+39 3356234563", email: "simone.conti@mail.it" },
            { nome: "Francesca", cognome: "Costa", telefono: "+39 3366234564", email: "francesca.costa@mail.it" },
            { nome: "Davide", cognome: "Bianchi", telefono: "+39 3376234565", email: "davide.bianchi@mail.it" },
            { nome: "Elisa", cognome: "Fontana", telefono: "+39 3386234566", email: "elisa.fontana@mail.it" },
            { nome: "Paolo", cognome: "Ricci", telefono: "+39 3396234567", email: "paolo.ricci@mail.it" },
            { nome: "Irene", cognome: "Marino", telefono: "+39 3406234568", email: "irene.marino@mail.it" }
        ]
    },
    {
        id: 7,
        destinazione: "Amsterdam",
        dataInizio: "2026-10-02",
        dataFine: "2026-10-08",
        partecipanti: [
            { nome: "Marco", cognome: "Verdi", telefono: "+39 3337234561", email: "marco.verdi7@mail.it" },
            { nome: "Giulia", cognome: "Romano", telefono: "+39 3347234562", email: "giulia.romano7@mail.it" },
            { nome: "Stefano", cognome: "Longo", telefono: "+39 3357234563", email: "stefano.longo7@mail.it" },
            { nome: "Valentina", cognome: "Rizzo", telefono: "+39 3367234564", email: "valentina.rizzo7@mail.it" },
            { nome: "Matteo", cognome: "Ferrari", telefono: "+39 3377234565", email: "matteo.ferrari7@mail.it" },
            { nome: "Sara", cognome: "Costa", telefono: "+39 3387234566", email: "sara.costa7@mail.it" },
            { nome: "Luca", cognome: "Greco", telefono: "+39 3397234567", email: "luca.greco7@mail.it" },
            { nome: "Elena", cognome: "Moretti", telefono: "+39 3407234568", email: "elena.moretti7@mail.it" }
        ]
    },
    {
        id: 8,
        destinazione: "Praga",
        dataInizio: "2026-11-11",
        dataFine: "2026-11-16",
        partecipanti: [
            { nome: "Davide", cognome: "Mancini", telefono: "+39 3338234561", email: "davide.mancini@mail.it" },
            { nome: "Chiara", cognome: "Rossi", telefono: "+39 3348234562", email: "chiara.rossi8@mail.it" },
            { nome: "Andrea", cognome: "Bruno", telefono: "+39 3358234563", email: "andrea.bruno@mail.it" },
            { nome: "Federica", cognome: "Fontana", telefono: "+39 3368234564", email: "federica.fontana@mail.it" },
            { nome: "Simone", cognome: "Greco", telefono: "+39 3378234565", email: "simone.greco@mail.it" },
            { nome: "Elisa", cognome: "Conti", telefono: "+39 3388234566", email: "elisa.conti@mail.it" },
            { nome: "Paolo", cognome: "Costa", telefono: "+39 3398234567", email: "paolo.costa@mail.it" },
            { nome: "Martina", cognome: "Ricci", telefono: "+39 3408234568", email: "martina.ricci@mail.it" }
        ]
    },
    {
        id: 9,
        destinazione: "Vienna",
        dataInizio: "2026-12-03",
        dataFine: "2026-12-10",
        partecipanti: [
            { nome: "Giorgio", cognome: "Ferrari", telefono: "+39 3339234561", email: "giorgio.ferrari@mail.it" },
            { nome: "Sara", cognome: "Romano", telefono: "+39 3349234562", email: "sara.romano@mail.it" },
            { nome: "Marco", cognome: "Rizzo", telefono: "+39 3359234563", email: "marco.rizzo@mail.it" },
            { nome: "Irene", cognome: "Costa", telefono: "+39 3369234564", email: "irene.costa9@mail.it" },
            { nome: "Davide", cognome: "Fontana", telefono: "+39 3379234565", email: "davide.fontana@mail.it" },
            { nome: "Elena", cognome: "Greco", telefono: "+39 3389234566", email: "elena.greco9@mail.it" },
            { nome: "Andrea", cognome: "Moretti", telefono: "+39 3399234567", email: "andrea.moretti@mail.it" },
            { nome: "Chiara", cognome: "Bianchi", telefono: "+39 3409234568", email: "chiara.bianchi@mail.it" }
        ]
    },
    {
        id: 10,
        destinazione: "Atene",
        dataInizio: "2027-01-15",
        dataFine: "2027-01-22",
        partecipanti: [
            { nome: "Luca", cognome: "Conti", telefono: "+39 3330234561", email: "luca.conti@mail.it" },
            { nome: "Martina", cognome: "Rossi", telefono: "+39 3340234562", email: "martina.rossi@mail.it" },
            { nome: "Simone", cognome: "Costa", telefono: "+39 3350234563", email: "simone.costa@mail.it" },
            { nome: "Francesca", cognome: "Ricci", telefono: "+39 3360234564", email: "francesca.ricci@mail.it" },
            { nome: "Matteo", cognome: "Greco", telefono: "+39 3370234565", email: "matteo.greco@mail.it" },
            { nome: "Giulia", cognome: "Longo", telefono: "+39 3380234566", email: "giulia.longo@mail.it" },
            { nome: "Paolo", cognome: "Fontana", telefono: "+39 3390234567", email: "paolo.fontana@mail.it" },
            { nome: "Elisa", cognome: "Romano", telefono: "+39 3400234568", email: "elisa.romano@mail.it" }
        ]
    }
];

export default travel;