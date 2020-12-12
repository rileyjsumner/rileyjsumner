import {Component, OnInit} from '@angular/core';
import covidByCounty from '../../../data/interactive/covid-wi';
import county_population from '../../../data/interactive/population-wi';
import new_cases from '../../../data/interactive/new-cases-wi';
import avgs from '../../../data/interactive/covid-seven-day-avg';

@Component({
  selector: 'app-covid-visualization',
  templateUrl: './covid-visualization.component.html',
  styleUrls: ['./covid-visualization.component.css']
})
export class CovidVisualizationComponent implements OnInit {

  covidCases: any;
  population: any;
  newCases: any;
  dateSelected: Date;
  dateBeforeSelection: Date;
  startDate: Date = new Date(2020, 1, 5);
  endDate: Date = new Date(2020, 11, 9);
  range: number;
  sevenDayAverage: any;

  constructor() {
    this.covidCases = covidByCounty;
    this.population = county_population;
    this.newCases = new_cases;
    this.dateSelected = new Date(2020, 1, 5);
    this.dateBeforeSelection = new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth(), this.dateSelected.getDate());
    this.dateBeforeSelection.setDate(this.dateBeforeSelection.getDate() - 1)
    this.range = (this.endDate.getTime() - this.startDate.getTime())/(1000*3600*24);
    this.formatLabel = this.formatLabel.bind(this);
    this.sevenDayAverage = avgs;
  }

  formatLabel(value: number) {
    let selected = new Date(2020, 1, 5);
    let start = new Date(selected.getTime());
    selected.setDate(selected.getDate() + value);

    this.dateSelected = new Date(start.getTime() + (1000 * 60 * 60 * 24 * value) );
    this.dateBeforeSelection = new Date(start.getTime() + (1000 * 60 * 60 * 24 * (value-1)));

    document.getElementById("currentDate").innerHTML = (this.dateSelected.getMonth() + 1) + "/" + this.dateSelected.getDate();
    this.updateMap(value);
    return (selected.getMonth() + 1) + "\/" + selected.getDate();
  }
  showCasesOn(date) {
    function showDateAsString(dateToShow: any) {
      return (dateToShow.getMonth()+1) + "\/" + dateToShow.getDate() + "\/20";
    }

    return this.covidCases.filter(function (casesOn) {
      return casesOn.date === showDateAsString(date);
    });
  }
  setPreviousCases(cases) {
    for(let i = 0; i < cases.length; i++) {
      let county_name = cases[i].county;
      let currCases = parseInt(cases[i].cases);
      if(this.newCases[0][county_name + " County"] != undefined) {
        this.newCases[0][county_name + " County"].day_one = this.newCases[0][county_name + " County"].day_two;
        this.newCases[0][county_name + " County"].day_two = this.newCases[0][county_name + " County"].day_three;
        this.newCases[0][county_name + " County"].day_three = this.newCases[0][county_name + " County"].day_four;
        this.newCases[0][county_name + " County"].day_four = this.newCases[0][county_name + " County"].day_five;
        this.newCases[0][county_name + " County"].day_five = this.newCases[0][county_name + " County"].day_six;
        this.newCases[0][county_name + " County"].day_six = this.newCases[0][county_name + " County"].day_seven;
        this.newCases[0][county_name + " County"].day_seven = currCases;
      }
    }
  }
  getSevenDayAverage(county, numDays) {
    let average = 0;
    if(this.sevenDayAverage[numDays] != undefined) {
      for(let i = 0; i < this.sevenDayAverage[numDays].length; i++) {
        if(this.sevenDayAverage[numDays][i][county] != undefined) {
          average = this.sevenDayAverage[numDays][i][county].avg;
        }
      }
    }
    return average;
  }
  getDeathColor(deaths, pop) {
    let deathRate = deaths * 100000/pop
    if(deathRate > 100) {
      return "#990000";
    }
    if(deathRate > 80) {
      return "#CC0000";
    }
    if(deathRate > 60) {
      return "#FF0000";
    }
    if(deathRate > 40) {
      return "#FF8000";
    }
    if(deathRate > 30) {
      return "#FF9933";
    }
    if(deathRate > 20) {
      return "#FFB266";
    }
    if(deathRate > 10) {
      return "#FFFF99";
    }
    return "#FFFFCC"
  }

  updateMap(numDays) {
    let cases = this.showCasesOn(this.dateSelected);
    this.setPreviousCases(this.showCasesOn(this.dateBeforeSelection));

    for(let i = 0; i < cases.length; i++) {
      let county_cir = document.getElementById(cases[i].county.replace(/ /g,"_")+"_cases");
      if(county_cir != undefined) {
        let county_name = cases[i].county;
        let deaths = cases[i].deaths;
        let newCases = this.getSevenDayAverage(county_name, numDays);
        newCases = (newCases < 0) ? 0:newCases;
        let countyPop = this.population[0][cases[i].county + " County"];
        let pop = -1;
        if(countyPop != undefined) {
          pop = countyPop.population;
          county_cir.style.fill = this.getDeathColor(deaths, pop);
          let rScale = 1000 * Math.sqrt(2 * newCases / pop);
          county_cir.setAttribute("r",rScale+"");
        }
      }
    }
  }

  ngOnInit(): void {
    let nav = document.getElementsByClassName("nav") as HTMLCollectionOf<HTMLElement>;
    let intro = document.getElementsByClassName("intro") as HTMLCollectionOf<HTMLElement>;
    nav[0].style.display = "none";
    intro[0].style.display = "none";
    let slider = document.getElementsByClassName("mat-slider-track-wrapper") as HTMLCollectionOf<HTMLElement>;
    slider[0].style.overflow = "visible";
    this.updateMap(0);
  }

}
