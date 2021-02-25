import { Component, OnInit } from '@angular/core';
import thanos from '../../../data/interactive/thanos';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-thanos-league',
  templateUrl: './thanos-league.component.html',
  styleUrls: ['./thanos-league.component.css']
})
export class ThanosLeagueComponent implements OnInit {

  thanos: any;
  base_url: String;
  teams: any;
  league_ids: any;
  constructor(private http: HttpClient) {
    this.base_url = 'https://api.sleeper.app/v1/';
    this.thanos = thanos.sort((a, b) => b.stone_count - a.stone_count);
    this.teams = [];
    this.league_ids = ['648271770712936448'] //647228342407344128
  }

  ngOnInit(): void {
    this.http.get<any>(this.base_url + 'league/'+this.league_ids[this.league_ids.length - 1]+'/users').subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        let avatar;
        if(data[i].avatar == null) {
          avatar = data[i].metadata.avatar;
        } else {
          avatar = 'https://sleepercdn.com/avatars/thumbs/' + data[i].avatar;
        }
        this.teams[i] = {
          avatar: avatar,
          team_name: data[i].metadata.team_name,
          display_name: data[i].display_name,
          stone_count: 0,
          power_up_matrix: [0,0,0,0,0,0],
          win_stone: false
        }
        console.log(data[i]);
      }
      this.calculateStones();
    });
  }

  getPlayoffBrackets() {

    for(let id in this.league_ids) {

    }
  }

  async getRegularSeasonOutcomes() {

    // matches[league_id][week][matchup_id][team_id]
    let matches = {};
    for(let i = 0; i < this.league_ids.length; i++) {
      matches[this.league_ids[i]] = [];
      for(let j = 1; j < 17; j++) {
        await this.http.get<any>(this.base_url + `league/${this.league_ids[i]}/matchups/${j}`).subscribe(data => {
          for(let k = 0; k < data.length; k++) {
            matches[this.league_ids[i]].push({
              year: 2021 + i,
              week: j,
              points: Math.random()*j, // data[k].points + data[k].custom_points
              matchup_id: data[k].matchup_id,
              roster_id: data[k].roster_id,
              didWin: false
            });
          }
        });
      }
    }
    console.log(matches);

    this.getPoints(matches)
  }

  getWinStreak(matches) {
    let streaks = {
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0,
      9:0,
      10:0
    };
    console.log(matches);


  }

  getPoints(matches) {
    let points = {
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0,
      9:0,
      10:0
    };

    for(let i = 0; i < this.league_ids.length; i++) {
      console.log(matches[this.league_ids[i]][5]);
      for(let j = 0; j < matches[this.league_ids[i]].length; j++) {
        console.log(matches[this.league_ids[i]]);
        points[matches[this.league_ids[i]][j].roster_id] += matches[this.league_ids[i]][j].points;
      }
    }
    console.log(points);
  }

  // given a team_id, find that teams stones
  calculateStones() {

    this.getRegularSeasonOutcomes();
    // get championships
    // get win streak
    // get max pf
    // get undefeated
    // get playoff wins


  }

}
