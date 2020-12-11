import {Component, OnInit} from '@angular/core';
import covidByCounty from '../../../data/interactive/covid-wi';
import county_population from '../../../data/interactive/population-wi';
import new_cases from '../../../data/interactive/new-cases-wi';

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

  constructor() {
    this.covidCases = covidByCounty;
    this.population = county_population;
    this.newCases = new_cases;
    this.dateSelected = new Date(2020, 5, 5);
    this.dateBeforeSelection = new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth(), this.dateSelected.getDate());
    this.dateBeforeSelection.setDate(this.dateBeforeSelection.getDate() - 1)
    this.range = (this.endDate.getTime() - this.startDate.getTime())/(1000*3600*24);
    this.formatLabel = this.formatLabel.bind(this);
  }

  formatLabel(value: number) {
    let selected = new Date(2020, 1, 5);
    let start = new Date(selected.getTime());
    selected.setDate(selected.getDate() + value);

    this.dateSelected = new Date(start.getTime() + (1000 * 60 * 60 * 24 * value) );
    this.dateBeforeSelection = new Date(start.getTime() + (1000 * 60 * 60 * 24 * (value-1)));

    this.updateMap();
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
      let updateElem = this.newCases[0][county_name + " County"];
      if(updateElem != undefined) {
        this.newCases[0][county_name + " County"].previous_cases = currCases;
      }
    }
  }

  updateMap() {
    let cases = this.showCasesOn(this.dateSelected);
    this.setPreviousCases(this.showCasesOn(this.dateBeforeSelection));

    for(let i = 0; i < cases.length; i++) {
      let county_cir = document.getElementById(cases[i].county.replace(/ /g,"_")+"_cases");
      if(county_cir != undefined) {
        let county_name = cases[i].county;
        let caseCount = parseInt(cases[i].cases);
        let prevCases = this.newCases[0][county_name + " County"];
        let prevCaseNum = 0;
        if(prevCases != undefined) {
          prevCaseNum = prevCases.previous_cases;
        }
        let newCases = caseCount - prevCaseNum;
        newCases = (newCases < 0) ? 0:newCases;
        let countyPop = this.population[0][cases[i].county + " County"];
        let pop = -1;
        if(countyPop != undefined) {
          pop = countyPop.population;
          county_cir.setAttribute("r",(100000*newCases/pop/2.5)+"");
        }
      }

    }
  }

  ngOnInit(): void {
    let slider = document.getElementsByClassName("mat-slider-track-wrapper") as HTMLCollectionOf<HTMLElement>;
    console.log(slider);
    slider[0].style.overflow = "visible";
    this.updateMap();

  }

}
