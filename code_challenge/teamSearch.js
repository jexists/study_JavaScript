
const filterOption = (input, option) =>
  option.nzValue.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
  option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) >= 0;

import { TEAMLISTS } from './teamlist.js';

const teamlists = TEAMLISTS;
// console.log(teamlists[0].teams);
const all_teamlists = [
  ...teamlists[0].teams,
  ...teamlists[1].teams,
  ...teamlists[2].teams,
  ...teamlists[3].teams,
  ...teamlists[4].teams,
]

// console.log(all_teamlists);

const teamSearch2 = (value, teamlists) => {
  console.log(teamlists);

  // teamlists.map((teamgroup) => {
  //   // console.log(teamgroup.teams);
  // }).filter((teamname) => {
  //   console.log(teamname);
  // })

  teamlists.filter((teamgroup) => {
    // console.log(teamgroup.teams);
    // console.log(teamgroup.teams[0]);
    // console.log(teamgroup.teams[teamgroup.index]);
    teamgroup.teams.forEach((team, i) => {
      // console.log(i, team.ko);
      // if (team.ko === value) {
      //   console.log(team.ko);
      // }
      if (
        team.en.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
        team.ko.toLowerCase().indexOf(value.toLowerCase()) >= 0
      ) {
        console.log(team);
        return team;
      }
    });
  });
}

// teamSearch2('arsen', teamlists);
console.log(teamSearch2('arsen', teamlists));

const teamSearch = (value, teamlists) => {
  teamlists.filter((all_teamlists) => {
    // console.log(all_teamlists);
    // console.log(all_teamlists.en.toLowerCase().indexOf(value.toLowerCase()) >= 0);

    // console.log (all_teamlists.en.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
    // all_teamlists.ko.toLowerCase().indexOf(value.toLowerCase()) >= 0);

  })

  // console.log(value.cal);

  // this.filteredTeamOptions = ['abc', 'cbd'];
  // this.map((list) => {
  //   console.log(list.teams);
  //   list.teams.filter(option => {
  //     console.log('option', option);
  //   })
  // })
}

// console.log(teamSearch('al', all_teamlists));
teamSearch('al', all_teamlists);

// const input = document.querySelector('input');
// input.addEventListener('input', teamSearch);