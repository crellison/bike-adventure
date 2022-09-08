interface Race {
  name: string;
  cole?: Boolean;
  matt?: Boolean;
  end: Date;
  start?: Date;
}

export const races: Record<string, Race> = {
  "White Park CX": {
    name: "White Park CX",
    cole: true,
    end: new Date('2022-08-27'),
  },
  'Blunt Park CX': {
    name: 'Blunt Park CX',
    matt: true,
    end: new Date('2022-08-28'),
  },
  "NECX SS Series (15 events)": {
    name: "NECX SS Series (15 events)",
    cole: true,
    start: new Date('2022-08-27'),
    end: new Date('2022-12-03'),
  },
  "Grand Prix Beverly": {
    name: "Grand Prix Beverly",
    matt: true,
    end: new Date('2022-09-10'),
  },
  "Deer Farm CX": {
    name: "Deer Farm CX",
    matt: true,
    end: new Date('2022-09-17'),
  },
  "Rochester CX": {
    name: "Rochester CX",
    matt: true,
    start: new Date('2022-09-24'),
    end: new Date('2022-09-25'),
  },
  "Charm City Cross": {
    name: "Charm City Cross",
    matt: true,
    start: new Date('2022-10-01'),
    end: new Date('2022-10-02'),
  },
  "Major Taylor 'Cross Cup": {
    name: "Major Taylor 'Cross Cup",
    matt: true,
    start: new Date('2022-10-29'),
    end: new Date('2022-10-30'),
  },
  "Really Rad Festival of CX": {
    name: "Really Rad Festival of CX",
    matt: true,
    cole: true,
    start: new Date('2022-11-05'),
    end: new Date('2022-11-06'),
  },
  "The Northampton International": {
    name: "The Northampton International",
    matt: true,
    cole: true,
    start: new Date('2022-11-12'),
    end: new Date('2022-11-13'),
  },
  "North Carolina Grand Prix": {
    name: "North Carolina Grand Prix",
    matt: true,
    start: new Date('2022-11-19'),
    end: new Date('2022-11-20'),
  },
  "CX Nationals": {
    name: "CX Nationals",
    matt: true,
    cole: true,
    start: new Date('2022-12-06'),
    end: new Date('2022-12-11'),
  },
}
