export interface Links {
  site: string;
  url: string;
}

export interface Project {
  title: string;
  stack: string[];
  description: string;
  links: Links[];
}

const projects: Project[] = [
  {
    title: 'Durbanvill Cocktail Finder',
    stack: ['HTML', 'SCSS', 'NPM', 'Firebase'],
    description:
      'A cocktail finder app tinder like app for cocktails recipes',
    links: [
      {
        site: 'website',
        url: 'https://cocktailfinder.durbanvillehills.co.za',
      },
    ],
  },
  {
    title: 'Cib-landing',
    stack: ['Angular', 'PrimeNg', 'Angular Material', 'Sass'],
    description: 'Flight booking app close landing page',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/cib-landing-page',
      },
    ],
  },
  {
    title: 'Capetown weather app',
    stack: ['Reactjs', 'Typescript'],
    description: 'Cape Town weather forecast app',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/weather-app',
      },
      {
        site: 'website',
        url: 'https://cape-weather.netlify.app',
      },
    ],
  },
  {
    title: 'Unit-Converter',
    stack: ['Java', 'Spring', 'Postgresql'],
    description: 'An API to convert measurement units',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/unit-converter',
      },
    ],
  },
  {
    title: 'Roullete console game',
    stack: ['Java'],
    description: 'Command line multiplayer roulette game.',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/roulette-console',
      },
    ],
  },
  {
    title: 'BookATransport',
    stack: ['Nodejs', 'Rest', 'Postgresql'],
    description: 'Transport booking api',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/transportApi',
      },
    ],
  },
  {
    title: 'Covid-19 Tables',
    stack: ['Reactjs', 'Google Charts'],
    description: 'Covid 19 stats Tables',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/covid-tables',
      },
      {
        site: 'website',
        url: 'https://covid19tables.netlify.app/countries',
      },
    ],
  },
  {
    title: 'Roll Die',
    stack: ['Reactjs', 'Google Charts'],
    description: 'Roll a dice on the browser',
    links: [
      {
        site: 'github',
        url: 'https://github.com/msizar/roll-dice-app',
      },
      {
        site: 'website',
        url: 'https://rolldie.netlify.app/',
      },
    ],
  },
];

export default projects;
