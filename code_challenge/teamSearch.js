
const filterOption = (input, option) =>
  option.nzValue.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
  option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) >= 0;

import { TEAMLISTS } from './teamlist.js';

const teamlists = TEAMLISTS;
console.log(teamlists[0].teams);
const all_teamlists = [
  ...teamlists[0].teams,
  ...teamlists[1].teams,
  ...teamlists[2].teams,
  ...teamlists[3].teams,
  ...teamlists[4].teams,
]

console.log(all_teamlists);

const teamSearch = (value, teamlists) => {
  teamlists.filter((all_teamlists) => {
    console.log(all_teamlists.en.toLowerCase().indexOf(value.toLowerCase()) >= 0);

    all_teamlists.en.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
    all_teamlists.ko.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    
  })
    
  // console.log(value.cal);
  
  // this.filteredTeamOptions = ['abc', 'cbd'];
  // this..map((list) => {
  //   console.log(list.teams);
  //   list.teams.filter(option => {
  //     console.log('option', option);
  //   })
  // })
}
console.log(teamSearch('al', all_teamlists));

// const input = document.querySelector('input');
// input.addEventListener('input', teamSearch);